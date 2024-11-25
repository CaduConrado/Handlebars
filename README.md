# Handlebars ##

## Descrição (Description) ##

**Português**: Neste repositório apresento os principais conceitos da utilização do Handlebars, um pacote que fornece a possibilidade de utilizar layouts em seu frontend. Como a maioria dos meus projetos são voltados para o desenvolvimento **Backend** aqui não é diferente, eu busco apresentar como funciona o trabalho do **Backend** com o Handlebars. 

**English**: In this repository I present the main concepts of using Handlebars, a package that provides the possibility of using layouts in your frontend. As most of my projects are aimed at **Backend** development, this is no different, I seek to present how **Backend** works with Handlebars.



## Instalação (Installation) ##

Certifique-se de ter o Node.js instalado em sua máquina. Clone o repositório e instale as dependências com o comando abaixo:

Make sure you have Node.js installed on your machine. Clone the repository and install the dependencies with the command below:

```bash
git clone https://github.com/CaduConrado/Handlebars
cd seu_repositorio
npm install
```

## Como Usar (How to Use) ##

Para iniciar o sistema, execute o seguinte comando no terminal: 

To start the system, run the following command in the terminal:

```bash
npm start
```

**Português**: Com isso você receberá uma mensagem no terminal informando que o servidor está rodando. Podendo acessar a aplicação via navegador através da porta setado no código.

**English**: With this you will receive a message on the terminal informing you that the server is running. You can access the application via browser through the port set in the code.

## Projeto Exemplo (Project of Example)

## Minha Loja, a melhor loja do mundo!
**Descrição**: Neste exemplo que está presente na pasta /tranning eu desenvolvi uma página web simulando uma loja de artigos de surf, utilizando as ferramentas do **Handlebars** para configurar os layouts. Nela o usuário pode ver os produtos disponíveis além de acessar cada produto e ser direcionado para outra página onde é exibido cada detalhe do referido produto.

**Description**: In this example, which is present in the /tranning folder, I developed a web page simulating a surfing store, using the **Handlebars** tools to configure the layouts. There, the user can see the available products in addition to accessing each product and being directed to another page where each detail of that product is displayed.





## Exemplo (Example): ##

![Página Inicial](https://github.com/CaduConrado/Handlebars/blob/main/assets/minha_loja_1.jpeg)

![Detalhes do Produto](https://github.com/CaduConrado/Handlebars/blob/main/assets/minha_loja_2.jpeg)


## Estrutura do Projeto (Project Structure) ##

- **index.js**: Contém o código principal do sistema.
- **instacao_handlebars/**: Nesta pasta eu apresento como devemos configurar o nosso projeto para utilizar o handlebars.
- **layouts/**: Aqui apresento como vamos utilizar os layouts nos projetos.
- **datas_to_view/**: Aqui demonstro como podemos redenrizar uma página html passando apenas os dados que iremos manipular pelo **Backend**.
- **condition/**: Na pasta **condition** mostro como podemos trabalhar com condicionais diretamente nas nossas views.
- **with**: Em **with** é demonstrado como podemos utilizar estruturas de repetição na view.
- **partials**: Demonstro como utilizar partials, uma parte do escopo da view que poderemos reaproveitar em diferentes partes do código.
- **tranning**: Aqui apresento um projeto reunindo os principais conceitos apresentados nas pastas anteriores.

## Dependências (Dependencies)

- **Express**: Utilizado para criação das rotas.
- **Express-Handlebars**: Utilizado para a criação de layouts reutilizáveis no frontend.
- **Nodemon**: Utilizado para otimizar o desenvolvimento.

## Contribuição (Contribution) ##

**Português**: Sinta-se à vontade para contribuir com o projeto, sugerindo melhorias ou relatando problemas.

**English**: Feel free to contribute to the project by suggesting improvements or reporting issues.