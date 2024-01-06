# Teste para desenvolvedor de software para a empresa RD Station Conversas por Tallos

O teste consiste em um sistema de balanceamento entre clientes e Customer Success (CSs). Os CSs são os Gerentes de Sucesso, são responsáveis pelo acompanhamento estratégico dos clientes.

Dependendo do tamanho do cliente - aqui nos referimos ao tamanho da empresa - nós temos que colocar CSs mais experientes para atendê-los.

Um CS pode atender mais de um cliente, além disso os CSs também podem sair de férias, tirar folga, ou mesmo ficarem doentes, então é preciso levar esses critérios em conta na hora de rodar a distribuição.

Dado este cenário, o sistema distribui os clientes com os CSs de capacidade de atendimento mais próxima (maior) ao tamanho do cliente.

## Premissas
- Todos os CSs têm níveis diferentes
- Não há limite de clientes por CS
- Clientes podem ficar sem serem atendidos
- Clientes podem ter o mesmo tamanho
- 0 < n < 1.000
- 0 < m < 1.000.000
- 0 < id do cs < 1.000
- 0 < id do cliente < 1.000.000
- 0 < nível do cs < 10.000
- 0 < tamanho do cliente < 100.000
- Valor máximo de t = n/2 arredondado para baixo

## Input
A função `customerSuccessBalancing()` recebe 3 parâmetros:
- id e nivel da experiencia do CS
- id e nivel de experiência dos Clientes
- ids dos CustomerSuccess indisponíveis

## Output
O resultado esperado deve ser o id do CS que atende mais clientes. Com esse valor a empresa poderá fazer um plano de ação para contratar mais CS’s de um nível aproximado.

Em caso de empate retornar 0.

No desenvolvimento foi utilizada a linguagem Javascript

A estrutura de pastas foi modificada, os arquivos de testes foram separados e movidos para a pasta "tests" e a pasta "utils" foi criada para a existência de scripts que possam ser utilizados em mais de um momento no código, no caso do teste, incluí nesta pasta o arquivo input-validator, com a validação dos inputs a serem utlizados no código de balanceamento entre clientes e Customer Success

Para rodar os testes, basta acessar a pasta fornecida e executar os comandos

```bash
npm install
npm test