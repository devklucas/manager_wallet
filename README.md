# manager_wallet
Gerencie suas receitas e seus gastos de maneira fácil e rápida

Motivação

Trata-se de projeto para fins educacionais, que tem como objetivo uma aplicação que se propõe a organizar de forma simples e rápida os gastos do usuário.

Para rodar a aplicação

Pode acessar aqui : https://manager-wallet.vercel.app/

Ou você pode clonar o repositório em sua maquina local e rodar os seguintes comandos.

yarn || npm install

Aplicação 

Se trata de uma spa(single page application), que se trata de pagina que consiste em uma única página web com o objetivo de fornecer uma experiência do usuário similar à de um aplicativo desktop. Em um SPA, todo o código necessário - HTML, JavaScript, e CSS – ou é obtido com um único carregamento de página, ou os recursos apropriados são carregados dinamicamente e adicionados à página conforme necessário, geralmente em resposta a ações do usuário.

A página não é recarregada em qualquer momento do processo, tampouco ocorre a transferência de controle para outra página, embora a URL no navegador ou a API de história do HTML5 possam ser usadas para fornecer a percepção e navegabilidade de páginas separadas ao aplicativo. Interação com aplicativos de página única muitas vezes envolve comunicação dinâmica com o servidor web por trás dos bastidores.

Ferramentas utilizadas

React js - Usada para criar e gerenciar a virtual DOM | Yarn  - Gerenciador de dependencias do projeto | Styled Components - usada para estilizar os componentes da página | React Router Dom - Usada para gerenciar e navegar entre as páginas | Vercel - Biblioteca que gerencia o sistema de deploy da aplicação Figma - Implementar o layout 

Components

Header - Mostra a logo e o botao para voltar a pagina inicial.

Resume Money - Renderiza os cards de lançamentos na tela. 

boxInput - Responsável por criar formulario para captar os dados para o state de lançametos.

noCard - Models que renderiza apenas se não houver nenhum lançamento registrado

Card - Models para card de lançamentos 

Total - Responsavel por renderizar o valor disponível em conta, levando em consideraçao os lançamentos feitos, mesmo se esse valor for negativo.

Principais Features 

- Criar rotas de navegação para a página.

- Adicionar e remover lançamentos e renderizar em tela.

- Filtrar os Lançamentos de acordo com o tipo, se é uma entrada ou saída.

- Recalcular o valor total dos lançamentos a cada novo lançamento.
