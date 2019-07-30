# REST API com Node
Exemplo de uma pequena aplicação REST com node utilizando Middleware; bastante funcional utilizando apenas o básico do Node

## Utilização de Métodos

GET / POST / DELETE / PUT

### Rotas

- `POST /projects`: A rota recebe `id` e `title` dentro corpo de cadastrar um novo projeto dentro de um array no seguinte formato: `{ id: "1", title: 'Novo projeto', tasks: [] }`; enviar tanto o ID quanto o título do projeto no formato string com áspas duplas.

- `GET /projects`: Rota que lista todos projetos e suas tarefas;

- `PUT /projects/:id`: A rota altera apenas o título do projeto com o `id` presente nos parâmetros da rota;

- `DELETE /projects/:id`: A rota deleta o projeto com o `id` presente nos parâmetros da rota;

- `POST /projects/:id/tasks`: A rota recebe um campo `title` e armazena uma nova tarefa no array de tarefas de um projeto específico escolhido através do `id` presente nos parâmetros da rota;

## Utilização de Middlewares

Globais e Locais.

- Global: Faz uma contagem de quantas requisições foram feitas na aplicação até então;
- Local: Faz a cheacagem em  todas rotas que recebem o ID do projeto nos parâmetros da URL que verifica se o projeto com aquele ID existe; se não existir retorna um erro, caso contrário permite que a requisição continue normalmente;
