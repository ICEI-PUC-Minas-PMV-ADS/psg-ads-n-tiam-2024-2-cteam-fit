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


## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

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
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

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

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Exemplo de matriz de rastreabilidade](img/02-matriz-rastreabilidade.png)

> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![Simple Project Timeline](img/02-project-timeline.png)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo.

![Orçamento](img/02-orcamento.png)
