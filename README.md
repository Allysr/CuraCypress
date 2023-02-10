<h1 align="center">
<br> Estudo de Cypress no site CURA Healthcare Service
</h1>

<h4 align="center">
  Alguns BDD's usados para realização dos testes no cypress:
</h4>
<br> 

<div align="center">
<img width="500px" alt="Site para testes automatizados CuraHealthcare" src="https://i.ibb.co/jMmKjYP/Captura-de-tela-2023-02-09-115615.png" />
</div>
<br>

```diff
• Logar
Dado que o usuário tenha um cadastro
E esteja na página de login
Quando ele inserir os dados válidos
Então deve ser redirecionado para a página 'Make Appointment'

• Sair do site
Dado que o usuário esteja logado
Quando ele clicar no menu
E clicar em 'Logout'
Então deve ser redirecionado para a página de entrada do site.

• Marcar uma consulta
Dado que o usuário logado esteja na página de marcar consulta
E insira todos os campos com dados válidos
Quando clicar em 'Book Appointment'
Então deve ser redirecionado para página de sucesso.

• Consultar agendamentos
Dado que o usuário esteja logado 
E tenha realizado um agendamento previamente
Quando ele estiver na página 'History'
Então deve aparecer a listagem de agendamentos.

• Voltar para a página inicial
Dado que o usuário na página de agendamentos
Quando clicar em 'Go To Homepage'
Então deve ser redirecionado para a página de entrada do site.

```
<br>
Site utilizado: https://katalon-demo-cura.herokuapp.com/
<h1>
