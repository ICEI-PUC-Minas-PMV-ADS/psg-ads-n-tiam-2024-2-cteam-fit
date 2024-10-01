# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Classes”.

> - [Diagramas de Classes - Documentação da IBM](https://www.ibm.com/docs/pt-br/rational-soft-arch/9.6.1?topic=diagrams-class)
> - [O que é um diagrama de classe UML? | Lucidchart](https://www.lucidchart.com/pages/pt/o-que-e-diagrama-de-classe-uml)

## Modelo ER

O Modelo Entidade-Relacionamento tem como função representar, através de um diagrama, as entidades (coisas, objetos) envolvidas no sistema e como elas se relacionam entre si. Mesmo em sistemas que utilizam bancos de dados não relacionais, como no caso do presente projeto, em que será utilizado o Firebase, o Modelo ER é essencial para uma visão clara e organizada da estrutura dos dados. Ele ajuda a identificar as entidades principais, como elas interagem e quais atributos são relevantes para cada uma.

No contexto do nosso projeto, as entidades foram definidas com base nos requisitos do sistema e em sua funcionalidade. O diagrama ER fornece uma representação visual das entidades e seus relacionamentos, permitindo fácil compreensão do modelo de dados antes da implementação.

Exemplo de entidades no sistema:
    
    • Usuário: Representa o cliente, personal trainer ou administrador.
        ◦ Atributos: Nome, E-mail, Data de Registro.
    • Atividade física: Representa os exercícios efetuados.
        ◦ Atributos: Nome, Categoria, Avaliação.
        
## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
As referências abaixo irão auxiliá-lo na geração do artefato “Esquema Relacional”.

> - [Criando um modelo relacional - Documentação da IBM](https://www.ibm.com/docs/pt-br/cognos-analytics/10.2.2?topic=designer-creating-relational-model)

## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

### Firebase
O Firebase é uma plataforma de armazenamento em nuvem desenvolvida pela Google que oferece uma variedade de serviços para simplificar o desenvolvimento de aplicativos web e móveis. Como uma solução backend-as-a-service (BaaS), ele oferece recursos como autenticação, banco de dados em tempo real, notificações push, armazenamento de arquivos, hospedagem e muito mais. 

Sua integração nativa com sistemas Android e ferramentas como o Android Studio facilita o torna uma opção extremante interessante para o desenvolvimento de aplicativos móveis.  

Além disso, o Firebase é altamente escalável e oferece suporte a múltiplas plataformas, incluindo iOS, Web, e Unity. Ele é amplamente utilizado devido à sua integração simples com linguagens como JavaScript e frameworks como React e React Native.

### Visual Studio Code
O Visual Studio Code (VS Code) é um editor de código-fonte leve e gratuito, desenvolvido pela Microsoft. Ele é amplamente utilizado por desenvolvedores para escrever, depurar e executar código em várias linguagens de programação, como JavaScript, Python, C#, HTML/CSS, e muito mais. 

O VS Code oferece suporte a uma vasta gama de extensões, que podem ser instaladas para adicionar funcionalidades como controle de versão integrado com Git, depuração ao vivo, realce de sintaxe avançado, e integração com ferramentas como Docker e Kubernetes. Sua capacidade de personalização e suporte para desenvolvimento remoto o tornam a escolha ideal tanto para desenvolvedores frontend quanto backend. 

### Expo Dev
O Expo Dev é uma plataforma e conjunto de ferramentas que permite o desenvolvimento rápido e eficiente de aplicativos móveis utilizando React Native. Ele fornece uma série de bibliotecas e APIs que facilitam a criação de aplicativos para iOS e Android com uma única base de código JavaScript. 

Com o Expo, pode-se escrever e testar rapidamente aplicativos móveis sem a necessidade de configurar ambientes complexos para cada sistema operacional. Expo também oferece uma aplicação chamada Expo Go, que é uma plataforma sandbox que permite o desenvolvimento nativo em Android e iOS.

### JavaScript
O JavaScript é uma das linguagens de programação mais amplamente utilizadas no desenvolvimento web e móvel. Originalmente criado para adicionar interatividade a páginas web, o JavaScript evoluiu para ser uma linguagem de uso geral, suportada por navegadores, servidores, via Node.js, e até mesmo para o desenvolvimento de aplicativos móveis com frameworks como React Native e Expo. 

Sua flexibilidade, facilidade de aprendizado e imensa comunidade de desenvolvedores o tornam a escolha ideal para construir interfaces de usuário dinâmicas, manipular dados e criar aplicativos em tempo real.

### React Native
O React Native é um framework de código aberto desenvolvido pelo Facebook que permite criar aplicativos móveis nativos para iOS e Android usando JavaScript e React. Ele oferece uma maneira eficiente de reutilizar o código entre as plataformas, mantendo o desempenho e a aparência nativos dos aplicativos. 

Uma das principais vantagens do React Native é que ele se integra perfeitamente com ferramentas como o Expo Dev, que simplifica ainda mais o desenvolvimento de aplicativos móveis, e com serviços backend como o Firebase, facilitando a implementação de funcionalidades complexas, como autenticação e sincronização de dados em tempo real. 

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

Conceituar qualidade de fato é uma tarefa complexa, mas ela pode ser vista como um método gerencial que através de procedimentos disseminados por toda a organização, busca garantir um produto final que satisfaça às expectativas dos stakeholders.

No contexto de desenvolvimento de software, qualidade pode ser entendida como um conjunto de características a serem satisfeitas, de modo que o produto de software atenda às necessidades de seus usuários. Entretanto, tal nível de satisfação nem sempre é alcançado de forma espontânea, devendo ser continuamente construído. Assim, a qualidade do produto depende fortemente do seu respectivo processo de desenvolvimento.

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software.
Com base nessas características e nas respectivas sub-características, identifique as sub-características que sua equipe utilizará como base para nortear o desenvolvimento do projeto de software considerando-se alguns aspectos simples de qualidade. Justifique as subcaracterísticas escolhidas pelo time e elenque as métricas que permitirão a equipe avaliar os objetos de interesse.

> **Links Úteis**:
>
> - [ISO/IEC 25010:2011 - Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models](https://www.iso.org/standard/35733.html/)
> - [Análise sobre a ISO 9126 – NBR 13596](https://www.tiespecialistas.com.br/analise-sobre-iso-9126-nbr-13596/)
> - [Qualidade de Software - Engenharia de Software 29](https://www.devmedia.com.br/qualidade-de-software-engenharia-de-software-29/18209/)
