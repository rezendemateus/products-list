function criarCards (produtos) {
    const listaDeProdutos = document.querySelector("ul");
    listaDeProdutos.innerHTML = "";

    produtos.forEach(produto => {

        const cardProduto   = document.createElement("li");
        const imgProduto    = document.createElement("img");
        const nomeProduto   = document.createElement("h3");
        const secaoProduto  = document.createElement("span");
        const precoProduto  = document.createElement("p");

        imgProduto.src = produto.img;
        imgProduto.alt = `Imagem ${produto.nome}`;

        nomeProduto.innerText = produto.nome;

        secaoProduto.innerText = produto.secao;

        precoProduto.innerText = produto.preco.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL"
        });

        listaDeProdutos.append(cardProduto);

        cardProduto.append(imgProduto, nomeProduto, secaoProduto, precoProduto);
    })

    calculaValorTotal(produtos);
}

function filtrarHortifruti (produtos) {

    const produtosFiltrados = []
    produtos.forEach(produto => {
        if(produto.secao === "Hortifruti"){
            produtosFiltrados.push(produto);
        }
    })

    criarCards(produtosFiltrados)
}

function filtrarInput (produtos) {

    const buscaPorNome = document.querySelector(".campoBuscaPorNome");

    let produtosFiltrados = []

    produtos.forEach((produto) => {
            if(produto.nome.toLowerCase() === buscaPorNome.value.toLowerCase()){
                produtosFiltrados.push(produto)
            }
        })

    criarCards(produtosFiltrados)
}

function filtrarPanificadora (produtos) {


    const produtosFiltrados = []
    produtos.forEach((produto) => {
        if(produto.secao === "Panificadora"){
            produtosFiltrados.push(produto);
        }
    })


    criarCards(produtosFiltrados);
}

function filtrarLaticinios (produtos) {
    let produtosFiltrados = [];

    produtos.forEach(produto => {
        if(produto.secao === "Laticínio") {
            produtosFiltrados.push(produto);
        }
    })

    criarCards(produtosFiltrados);
}

function calculaValorTotal (produtos) {
    const valorTotal = document.querySelector("#valorTotal");
    let total = 0;

    produtos.forEach(produto => {
        total += produto.preco;
    })

    valorTotal.innerText = total.toLocaleString("pt-br", {
        style: "currency", 
        currency: "BRL"
    })
}


function buttons (produtos) {
    const botaoFiltrarHortifruti = document.querySelector("#hortifruti");
    botaoFiltrarHortifruti.addEventListener("click", el => {
        el.preventDefault();
        filtrarHortifruti(produtos);
    })


    const botaoFiltrarNome = document.querySelector("#filtrarInput");
    botaoFiltrarNome.addEventListener("click", el => {
        el.preventDefault();
        filtrarInput(produtos);
    })

    const botaoTodos = document.querySelector("#todos");
    botaoTodos.addEventListener("click", el => {
        el.preventDefault();
        criarCards(produtos);
    })

    const botaoPanificadora = document.querySelector("#panificadora");
    botaoPanificadora.addEventListener("click", el => {
        el.preventDefault();
        filtrarPanificadora(produtos);
    })

    const botaoLaticinios = document.querySelector("#laticinios");
    botaoLaticinios.addEventListener("click", el => {
        el.preventDefault();
        filtrarLaticinios(produtos);
    })
}




criarCards(produtos);

buttons(produtos);
