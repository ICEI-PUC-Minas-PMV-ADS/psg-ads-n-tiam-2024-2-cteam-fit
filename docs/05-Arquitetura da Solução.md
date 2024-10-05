[cteam-fit-default-rtdb-Cteam-export.json](https://github.com/user-attachments/files/17267168/cteam-fit-default-rtdb-Cteam-export.json)# Arquitetura da Solução

## Requisitos e Restrições

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

|ID| Restrições                                            |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

## Modelo Não Relacional de Dados

O grupo optou por utilizar o Firebase, que é um banco de dados NoSQL, portanto não serão feitos os modelos ER e Relacional. No entanto, seguem exemplos de como organizaremos nossos arquivos JSON baseados no armazenamento de dados que faremos:

```yaml
{

{
  "Exercicios": {
    "id_exercicio_1": {
      "carga": 90,
      "grupo_muscular": "pernas",
      "link_video": "",
      "nome": "Leg Press 45",
      "repeticoes": 12,
      "serie": 3
    }
  },
  "Fichas": {
    "id_ficha_1": {
      "data_criacao": "2024-10-02",
      "id_ficha": 32154,
      "matricula_usuario": 1234,
      "status": "ativa",
      "validade": "2024-11-02"
    }
  },
  "Usuarios": {
    "id_usuario_1": {
      "data_nasc": "",
      "email": "",
      "fichas": "Fichas",
      "matricula": 1234,
      "nome": "",
      "objetivo": "",
      "role": ""
    }
  }
}
}

```

## Padronização de Qualidade do Produto

Conceituar qualidade de fato é uma tarefa complexa, mas ela pode ser vista como um método gerencial que através de procedimentos disseminados por toda a organização, busca garantir um produto final que satisfaça às expectativas dos stakeholders.

No contexto de desenvolvimento de software, qualidade pode ser entendida como um conjunto de características a serem satisfeitas, de modo que o produto de software atenda às necessidades de seus usuários. Entretanto, tal nível de satisfação nem sempre é alcançado de forma espontânea, devendo ser continuamente construído. Assim, a qualidade do produto depende fortemente do seu respectivo processo de desenvolvimento.

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software.
Com base nessas características e nas respectivas sub-características, identifique as sub-características que sua equipe utilizará como base para nortear o desenvolvimento do projeto de software considerando-se alguns aspectos simples de qualidade. Justifique as subcaracterísticas escolhidas pelo time e elenque as métricas que permitirão a equipe avaliar os objetos de interesse.

> **Links Úteis**:
>
> - [ISO/IEC 25010:2011 - Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models](https://www.iso.org/standard/35733.html/)
> - [Análise sobre a ISO 9126 – NBR 13596](https://www.tiespecialistas.com.br/analise-sobre-iso-9126-nbr-13596/)
> - [Qualidade de Software - Engenharia de Software 29](https://www.devmedia.com.br/qualidade-de-software-engenharia-de-software-29/18209/)
