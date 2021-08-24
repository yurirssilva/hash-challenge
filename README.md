## Instalação, Execução e Testes
Para a realização dos processos de instalação, execução e testes basta seguir os comandos informados abaixo. A aplicação estará exposta em http://localhost:3000 e a documentação da API pode ser encontrada em http://localhost:3000/api-docs
Obs.: É necessário a instalação prévia do docker para orquestração dos containers
1. docker-compose up --build -d
2. docker-compose run --rm express npm run test
3. docker-compose run --rm express npm run test-cov