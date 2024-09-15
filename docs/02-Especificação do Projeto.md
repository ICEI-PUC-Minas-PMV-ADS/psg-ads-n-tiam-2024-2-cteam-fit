# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

1. Larissa - A Jovem Aspirante:
Idade: 18 anos
Ocupação: Estagiária e estudante de Educação Física
Objetivo: Tornar-se uma profissional de referência na área de saúde e fitness.
Perfil: Larissa é apaixonada por esportes desde a infância. Atualmente, ela está cursando Educação Física e faz estágio em uma grande empresa, o que exige que ela equilibre sua rotina entre estudos, trabalho, e treinos na academia da faculdade. Larissa é determinada e focada em manter um estilo de vida saudável, acreditando que o sucesso vem do cuidado com o corpo e mente. Ela usa o app para planejar seus treinos, acompanhar seu progresso e garantir que está no caminho certo para alcançar suas metas, tanto em termos de condicionamento físico quanto de desenvolvimento profissional.

2. Pedro - O Profissional Ocupado:
Idade: 35 anos
Ocupação: Engenheiro em uma multinacional
Objetivo: Manter a forma física e aliviar o estresse do trabalho.
Perfil: Pedro trabalha em um ambiente corporativo exigente, com longas horas e prazos apertados. Ele frequenta a academia da empresa nas primeiras horas da manhã para garantir que consegue treinar antes de começar o dia. Pedro valoriza a eficiência e praticidade, utilizando o app para acessar suas fichas de treino personalizadas e ajustar os exercícios de acordo com o tempo disponível e os níveis de energia. Ele aprecia que o app monitora seu progresso e sugere mudanças conforme ele avança, garantindo que seu tempo na academia seja bem aproveitado.

3. Júlia - A Mãe Atarefada:
Idade: 42 anos
Ocupação: Assistente administrativa e mãe de dois filhos
Objetivo: Aumentar a energia e melhorar a saúde para acompanhar a rotina dos filhos.
Perfil: Júlia tem uma vida agitada, dividindo-se entre o trabalho e as responsabilidades familiares. Ela frequenta a academia logo após deixar os filhos na escola, aproveitando o intervalo antes de iniciar seu expediente. Júlia procura treinos que sejam eficazes e que maximizem o tempo que ela passa na academia. O app oferece a ela fichas de treino adaptadas às suas necessidades, com foco em exercícios que proporcionem resultados rápidos, além de acompanhar seu progresso ao longo do tempo, motivando-a a continuar cuidando de sua saúde.

4. Carlos - O Atleta Experiente:
Idade: 28 anos
Ocupação: Atleta amador e competidor de triatlo
Objetivo: Melhorar o desempenho nas competições e evitar lesões.
Perfil: Carlos leva o esporte a sério, treinando intensamente para suas competições de triatlo. Ele frequenta a academia para complementar seu treinamento com exercícios de força e resistência. Carlos utiliza o app para acessar fichas de treino altamente especializadas, monitorar seu progresso em tempo real e ajustar os treinos conforme necessário. Ele também valoriza as análises detalhadas de desempenho que o app oferece, ajudando-o a identificar áreas de melhoria e a evitar lesões durante sua preparação.

5. Ana - A Iniciante Motivada:
Idade: 24 anos
Ocupação: Assistente de marketing
Objetivo: Perder peso e adotar um estilo de vida mais saudável.
Perfil: Ana decidiu recentemente mudar seu estilo de vida e começou a frequentar a academia. Ela está animada, mas também um pouco insegura sobre como usar os equipamentos e realizar os exercícios corretamente. O app é seu guia na academia, oferecendo fichas de treino simples e fáceis de seguir, além de dicas sobre a utilização correta dos aparelhos. Ana valoriza a interface amigável do app, que a motiva a continuar frequentando a academia e a alcançar seus objetivos de forma gradual e segura.

6. Roberto - O Sênior Ativo:
Idade: 60 anos
Ocupação: Aposentado
Objetivo: Manter a saúde, a mobilidade e a independência.
Perfil: Roberto é um aposentado ativo que frequenta a academia para manter-se saudável e evitar problemas de mobilidade. Ele prefere treinos de baixo impacto, que sejam gentis com suas articulações, mas ainda assim eficazes. O app oferece fichas de treino adaptadas às suas necessidades, com ênfase em exercícios que promovam a força, a flexibilidade e o equilíbrio. Roberto também gosta de acompanhar seu progresso e aprecia que o app oferece lembretes e sugestões para manter uma rotina regular, ajudando-o a viver uma vida ativa e independente.

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
> 
## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Aluno               | Poder acessar meu treino definido pelo professor                                                     | Que consiga seguir o cronograma de treinamento de forma organizada e eficiente                       |
|Aluno               | Visualizar, de forma agrupada, a lista dos exercícios de cada treino selecionados pelo professor     | Que eu saiba quais exercícios tenho que realizar em cada dia de treino                               |
|Aluno               | Ter acesso a uma descrição detalhada da execução de cada exercício selecionado pelo professor        | Que eu possa entender o correto movimento e realizar o exercício de maneira precisa, evitando lesões |
|Personal Trainer    | Selecionar vídeos no youtube para cada exercício e associá-los às descrições dos exercícios          | Que meus alunos tenham também uma referência visual da execução correta dos movimentos               |
|Personal Trainer    | Atualizar os treinos de meus alunos e fazer modificações, excluir, ou adicionar novos exercícios     | Que os treinos seja adaptados de acordo com o desenvolvimento e necessidades dos alunos              |

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O sistema deve permitir a criação, leitura, atualização e exclusão (CRUD) de informações relevantes dos dados dos usuários, tais como cadastro e informações de login.| ALTA | 
|RF-002| O sistema deve ser capaz de registrar os exercícios realizados pelos alunos, com carga, e repetições. E ao final da série, dar o exercício como concluído. | ALTA |
|RF-003| A aplicação deve permitir a adição de lembretes sobre horario de refeições para o usuario.  | ALTA |
|RF-004| O sistema deverá permitir que o profissional cadastre os treinos de seus alunos na plataforma, mostrando a ficha para o aluno | ALTA |
|RF-005| O sistema deve oferecer a funcionalidade de agendamento de sessões de treino. | ALTA |
|RF-006| A aplicação deve garantir que apenas usuários cadastrados, e devidamente logados em suas contas tenham acesso a seus treinos e demais funcionalidades do sistema | MÉDIA |
|RF-007| O sistema deverá permitir que o personal trainer anexe links com vídeos dos exercícios | MÉDIA |
|RF-008| O sistema deve ter uma interface específica para o professor | MÉDIA |
|RF-009| O sistema deve ter interface específica para o aluno. | ALTA |
|RF-010| O sistema deve permitir que o usuário visualize um histórico detalhado de seus treinos anteriores, incluindo exercícios realizados, carga e repetições, e status de conclusão. | MEDIA |
|RF-011| O sistema deve permitir ao personal trainer registrar e acompanhar avaliações físicas periódicas de cada aluno, como medidas corporais, peso e porcentagem de gordura. | MEDIA |
|RF-012| A aplicação deve oferecer um controle de presença, permitindo que o personal trainer registre a frequência dos alunos nos treinos. | MEDIA |
|RF-013| O sistema deve permitir que os usuários recuperem ou redefinam suas senhas através de um e-mail cadastrado. | MEDIA |
|RF-014| O sistema deve permitir que os alunos avaliem cada treino com uma nota simples (por exemplo, de 1 a 5 estrelas). | MEDIA |




### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve persistir os dados no banco de dados | ALTA | 
|RNF-002| A aplicação, deve se manter em atividade, pelo menos, durante todo o período de horário comercial (5h - 23h59) | MÉDIA | 
|RNF-003| O sistema deve ser capaz de suportar no mínimo 10 acessos simultâneos de usuários | MÉDIA |
|RNF-004| O aplicativo deve funcionar de forma consistente em dispositivos com diferentes tamanhos de tela e resoluções, garantindo uma experiência de usuário otimizada em diferentes smartphones. | ALTA |


### Regras de Negócio

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RN-001| O sistema deve ser desenvolvido usando o banco de dados Firebase | ALTA | 


Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Diagrama de Casos de Uso

RF-001
![casoDeUsoRF1](https://github.com/user-attachments/assets/b1256a17-9258-4f4d-af4f-2ac35ca8d817)

RF-002 & RF-006
![casoDeUsoRF1e2](https://github.com/user-attachments/assets/11945739-b92f-4bbb-a8e9-83d58993cb48)

RF-003
![cteam lembrete (1)](https://github.com/user-attachments/assets/2c5220cc-ff4e-482c-9384-b678cee4d355)

RF-004
![casoDeUsoRF4](https://github.com/user-attachments/assets/34f7be0e-7e27-44a9-b271-842a50ffd9d7)

RF-005
![cteam lembrete](https://github.com/user-attachments/assets/ad63ad4b-9e65-4371-8d7f-1b5fadff62fe)

![Diagrama em branco (1)](https://github.com/user-attachments/assets/5fb8fa98-a543-4ef3-a552-39355809c6af)
RF-007
![Diagrama em branco (2)](https://github.com/user-attachments/assets/fdeea3db-74fa-4aec-95e3-c6dc706bb1a2)
RF-008


RF-009
![casoDeUsoRF09](https://github.com/user-attachments/assets/306043a7-8bac-48f0-bcb7-15b32c88830f)


RF-0010
![casoDeUsoRF10](https://github.com/user-attachments/assets/513c1484-6f3c-4e96-9d9a-182a385c80c2)

RF-0011

RF-0012

RF-0013
![Captura de tela 2024-09-15 143539](https://github.com/user-attachments/assets/fd28ba26-1134-42cc-b8f2-7eff6bdaef0d)

RF-0014
![Captura de tela 2024-09-15 145245](https://github.com/user-attachments/assets/cd87fbf9-aaf8-4e34-94fd-408fee87bdfa)

# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

Um gerenciamento eficaz das tarefas é crucial para alcançar altos níveis de produtividade no projeto. Portanto, é essencial que a gestão permita uma visualização clara das tarefas e das pessoas envolvidas. 

![Captura de tela 2024-09-15 155354](https://github.com/user-attachments/assets/1c8e6b8a-2997-40b8-a540-395f408178df)


## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Captura de tela 2024-09-15 161728](https://github.com/user-attachments/assets/1f1ee9c7-c5e2-45aa-80cb-27d75c166850)

