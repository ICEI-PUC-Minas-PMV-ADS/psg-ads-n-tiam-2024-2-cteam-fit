'use strict';

import { has } from "./utils.js";
import { WorkletEventHandler } from "../WorkletEventHandler.js";
import { findNodeHandle } from '../platformFunctions/findNodeHandle';
export class NativeEventsManager {
  #managedComponent;
  #componentOptions;
  #eventViewTag = -1;
  constructor(component, options) {
    this.#managedComponent = component;
    this.#componentOptions = options;
    this.#eventViewTag = this.getEventViewTag();
  }
  attachEvents() {
    executeForEachEventHandler(this.#managedComponent.props, (key, handler) => {
      handler.registerForEvents(this.#eventViewTag, key);
    });
  }
  detachEvents() {
    executeForEachEventHandler(this.#managedComponent.props, (_key, handler) => {
      handler.unregisterFromEvents(this.#eventViewTag);
    });
  }
  updateEvents(prevProps) {
    const computedEventTag = this.getEventViewTag();
    // If the event view tag changes, we need to completely re-mount all events
    if (this.#eventViewTag !== computedEventTag) {
      // Remove all bindings from previous props that ran on the old viewTag
      executeForEachEventHandler(prevProps, (_key, handler) => {
        handler.unregisterFromEvents(this.#eventViewTag);
      });
      // We don't need to unregister from current (new) props, because their events weren't registered yet
      // Replace the view tag
      this.#eventViewTag = computedEventTag;
      // Attach the events with a new viewTag
      this.attachEvents();
      return;
    }
    executeForEachEventHandler(prevProps, (key, prevHandler) => {
      const newProp = this.#managedComponent.props[key];
      if (!newProp) {
        // Prop got deleted
        prevHandler.unregisterFromEvents(this.#eventViewTag);
      } else if (isWorkletEventHandler(newProp) && newProp.workletEventHandler !== prevHandler) {
        // Prop got changed
        prevHandler.unregisterFromEvents(this.#eventViewTag);
        newProp.workletEventHandler.registerForEvents(this.#eventViewTag);
      }
    });
    executeForEachEventHandler(this.#managedComponent.props, (key, handler) => {
      if (!prevProps[key]) {
        // Prop got added
        handler.registerForEvents(this.#eventViewTag);
      }
    });
  }
  getEventViewTag() {
    // Get the tag for registering events - since the event emitting view can be nested inside the main component
    const componentAnimatedRef = this.#managedComponent._component;
    let newTag;
    if (componentAnimatedRef.getScrollableNode) {
      const scrollableNode = componentAnimatedRef.getScrollableNode();
      newTag = findNodeHandle(scrollableNode) ?? -1;
    } else {
      newTag = findNodeHandle(this.#componentOptions?.setNativeProps ? this.#managedComponent : componentAnimatedRef) ?? -1;
    }
    return newTag;
  }
}
function isWorkletEventHandler(prop) {
  return has('workletEventHandler', prop) && prop.workletEventHandler instanceof WorkletEventHandler;
}
function executeForEachEventHandler(props, callback) {
  for (const key in props) {
    const prop = props[key];
    if (isWorkletEventHandler(prop)) {
      callback(key, prop.workletEventHandler);
    }
  }
}
//# sourceMappingURL=NativeEventsManager.js.map