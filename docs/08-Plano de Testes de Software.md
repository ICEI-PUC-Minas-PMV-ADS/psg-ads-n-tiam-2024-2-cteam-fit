# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

# Casos de Teste do Aplicativo Mobile de Academia

## Caso de Teste 1: CRUD de Usuários
1. **Requisito associado**: RF-001
2. **Objetivo do teste**: Verificar se o sistema permite a criação, leitura, atualização e exclusão de informações dos usuários.
3. **Passo a passo do teste**:
   1. Acessar a interface de cadastro de usuário.
   2. Preencher todos os campos obrigatórios e submeter o formulário.
   3. Acessar a lista de usuários e verificar se o novo usuário foi adicionado.
   4. Selecionar o usuário recém-criado e verificar suas informações.
   5. Atualizar algumas informações do usuário e salvar.
   6. Verificar se as informações atualizadas aparecem corretamente.
   7. Excluir o usuário e confirmar a exclusão.
   8. Verificar se o usuário não está mais na lista.
4. **Critérios de êxito**: O usuário deve ser criado, lido, atualizado e excluído com sucesso sem erros.

---

## Caso de Teste 2: Registro de Exercícios
1. **Requisito associado**: RF-002
2. **Objetivo do teste**: Validar se o sistema registra corretamente os exercícios realizados pelos alunos.
3. **Passo a passo do teste**:
   1. Acessar a interface de registro de exercícios.
   2. Selecionar um aluno e um exercício específico.
   3. Inserir a carga e o número de repetições.
   4. Marcar o exercício como concluído.
   5. Salvar as informações.
   6. Verificar se as informações aparecem no histórico de exercícios do aluno.
4. **Critérios de êxito**: O exercício deve ser registrado corretamente, e o status deve ser atualizado para "concluído".

---

## Caso de Teste 3: Lembretes de Refeições
1. **Requisito associado**: RF-003
2. **Objetivo do teste**: Confirmar se o sistema permite adicionar lembretes para horários de refeições.
3. **Passo a passo do teste**:
   1. Acessar a seção de lembretes na aplicação.
   2. Criar um novo lembrete para uma refeição.
   3. Definir o horário e a descrição do lembrete.
   4. Salvar o lembrete.
   5. Verificar se o lembrete aparece na lista de lembretes.
4. **Critérios de êxito**: O lembrete deve ser adicionado e aparecer corretamente na lista de lembretes.

---

## Caso de Teste 4: Cadastro de Treinos
1. **Requisito associado**: RF-004
2. **Objetivo do teste**: Testar se o profissional pode cadastrar treinos para seus alunos.
3. **Passo a passo do teste**:
   1. Acessar a interface de cadastro de treinos.
   2. Selecionar um aluno.
   3. Adicionar os exercícios, carga e repetições.
   4. Salvar o treino.
   5. Acessar a ficha do aluno e verificar se o treino aparece corretamente.
4. **Critérios de êxito**: O treino deve ser cadastrado e visível na ficha do aluno.

---

## Caso de Teste 5: Agendamento de Sessões
1. **Requisito associado**: RF-005
2. **Objetivo do teste**: Verificar se o sistema permite o agendamento de sessões de treino.
3. **Passo a passo do teste**:
   1. Acessar a seção de agendamento.
   2. Selecionar um aluno e definir data e horário da sessão.
   3. Salvar o agendamento.
   4. Verificar se a sessão agendada aparece no calendário.
4. **Critérios de êxito**: O agendamento deve ser salvo e visível no calendário.

---

## Caso de Teste 6: Acesso de Usuários
1. **Requisito associado**: RF-006
2. **Objetivo do teste**: Garantir que apenas usuários logados possam acessar suas funcionalidades.
3. **Passo a passo do teste**:
   1. Acessar a aplicação sem estar logado.
   2. Tentar acessar a página de treinos.
   3. Realizar login com credenciais válidas.
   4. Acessar novamente a página de treinos.
4. **Critérios de êxito**: O acesso deve ser negado sem login e permitido após login.

---

## Caso de Teste 7: Anexar Links de Vídeos
1. **Requisito associado**: RF-007
2. **Objetivo do teste**: Verificar se o personal trainer pode anexar links de vídeos aos exercícios.
3. **Passo a passo do teste**:
   1. Acessar a interface de exercícios.
   2. Selecionar um exercício.
   3. Inserir um link de vídeo.
   4. Salvar as alterações.
   5. Verificar se o link aparece corretamente associado ao exercício.
4. **Critérios de êxito**: O link deve ser anexado e acessível no exercício.

---

## Caso de Teste 8: Interface do Professor
1. **Requisito associado**: RF-008
2. **Objetivo do teste**: Confirmar que existe uma interface específica para o professor.
3. **Passo a passo do teste**:
   1. Fazer login como professor.
   2. Navegar pela interface do sistema.
   3. Verificar se as funcionalidades específicas estão acessíveis.
4. **Critérios de êxito**: A interface deve ser distinta e apresentar funcionalidades apropriadas para o professor.

---

## Caso de Teste 9: Interface do Aluno
1. **Requisito associado**: RF-009
2. **Objetivo do teste**: Confirmar que existe uma interface específica para o aluno.
3. **Passo a passo do teste**:
   1. Fazer login como aluno.
   2. Navegar pela interface do sistema.
   3. Verificar se as funcionalidades específicas estão acessíveis.
4. **Critérios de êxito**: A interface deve ser distinta e apresentar funcionalidades apropriadas para o aluno.

---

## Caso de Teste 10: Histórico de Treinos
1. **Requisito associado**: RF-010
2. **Objetivo do teste**: Validar se o usuário pode visualizar o histórico detalhado de seus treinos.
3. **Passo a passo do teste**:
   1. Fazer login como aluno.
   2. Acessar a seção de histórico de treinos.
   3. Verificar se todos os treinos anteriores estão listados com detalhes (exercícios, carga, repetições).
4. **Critérios de êxito**: O histórico deve ser exibido corretamente, incluindo todos os detalhes relevantes.

---

## Caso de Teste 11: Avaliações Físicas
1. **Requisito associado**: RF-011
2. **Objetivo do teste**: Confirmar que o personal trainer pode registrar e acompanhar avaliações físicas dos alunos.
3. **Passo a passo do teste**:
   1. Fazer login como personal trainer.
   2. Acessar a seção de avaliações físicas.
   3. Selecionar um aluno e inserir dados (medidas corporais, peso, porcentagem de gordura).
   4. Salvar as avaliações.
   5. Verificar se as avaliações aparecem no perfil do aluno.
4. **Critérios de êxito**: As avaliações devem ser registradas e visíveis no perfil do aluno.

---

## Caso de Teste 12: Controle de Presença
1. **Requisito associado**: RF-012
2. **Objetivo do teste**: Validar se o personal trainer pode registrar a frequência dos alunos nos treinos.
3. **Passo a passo do teste**:
   1. Fazer login como personal trainer.
   2. Acessar a seção de controle de presença.
   3. Selecionar um aluno e marcar presença em uma sessão.
   4. Salvar a presença.
   5. Verificar se a presença aparece registrada na lista de frequências do aluno.
4. **Critérios de êxito**: A presença deve ser registrada corretamente e aparecer na lista de frequências.

---

## Caso de Teste 13: Recuperação de Senha
1. **Requisito associado**: RF-013
2. **Objetivo do teste**: Confirmar que os usuários podem recuperar ou redefinir suas senhas através do e-mail cadastrado.
3. **Passo a passo do teste**:
   1. Acessar a página de login.
   2. Selecionar a opção de "Esqueci minha senha".
   3. Inserir o e-mail cadastrado e enviar a solicitação.
   4. Verificar o e-mail recebido com o link de redefinição.
   5. Acessar o link e definir uma nova senha.
   6. Tentar fazer login com a nova senha.
4. **Critérios de êxito**: A recuperação deve ser bem-sucedida e a nova senha deve permitir o login.

---

## Caso de Teste 14: Avaliação de Treinos
1. **Requisito associado**: RF-014
2. **Objetivo do teste**: Verificar se os alunos podem avaliar cada treino com uma nota.
3. **Passo a passo do teste**:
   1. Fazer login como aluno.
   2. Acessar a seção de treinos concluídos.
   3. Selecionar um treino específico que foi realizado.
   4. Escolher uma nota de 1 a 5 estrelas.
   5. Submeter a avaliação.
   6. Verificar se a avaliação aparece corretamente na lista de avaliações do treino.
4. **Critérios de êxito**: A avaliação deve ser registrada corretamente, exibindo a nota e qualquer comentário, e deve ser visível na lista de avaliações do treino.


 
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
