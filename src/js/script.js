let carrinho = [];

function criarCards (produtos) {
    const listaDeProdutos = document.querySelector("ul");
    listaDeProdutos.innerHTML = "";

    produtos.forEach(produto => {

        const { id, nome, preco, secao, categoria, img, componentes } = produto;

        const cardProduto   = document.createElement("li");
        const imgProduto    = document.createElement("img");
        const nomeProduto   = document.createElement("h3");
        const secaoProduto  = document.createElement("span");
        const precoProduto  = document.createElement("p");
        const nutrientes    = document.createElement("ol");
        const botaoComprar  = document.createElement("button");

        imgProduto.src = img;
        imgProduto.alt = `Imagem ${nome}`;

        nomeProduto.innerText = nome;

        secaoProduto.innerText = secao;

        precoProduto.innerText = parseInt(preco).toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL"
        });

        nutrientes.classList.add("nutrientes");
        componentes.forEach((componente) => {
            const nutriente = document.createElement("li");
            nutriente.innerText = componente;
            nutrientes.append(nutriente);
        })

        botaoComprar.innerText = "Comprar";
        botaoComprar.id = id;
        botaoComprar.addEventListener("click", el => {
            el.preventDefault();
            adicionaAoCarrinho(produto);
        })


        listaDeProdutos.append(cardProduto);

        cardProduto.append(imgProduto, nomeProduto, secaoProduto, nutrientes, precoProduto, botaoComprar);
    })
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
    const inputValue = buscaPorNome.value;

    let produtosFiltrados = []

    produtos.forEach((produto) => {

        const { nome, secao, categoria } = produto;

            if(nome.toLowerCase() === inputValue.toLowerCase() || categoria.toLowerCase() === inputValue.toLowerCase || secao.toLowerCase() === inputValue.toLowerCase()){
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
        if(produto.secao === "Laticinio") {
            produtosFiltrados.push(produto);
        }
    })

    criarCards(produtosFiltrados);
}

function carrinhoDeCompras () {
    const vitrine = document.querySelector(".containerVitrine");

    const carrinho = document.createElement("div");
    carrinho.classList.add("containerCarrinho");

    const cabecalhoCarrinho = document.createElement("div");
    cabecalhoCarrinho.classList.add("cabecalhoCarrinho");
    const tituloCarrinho = document.createElement("h1");
    tituloCarrinho.innerText = "Carrinho";

    const iconeCarrinho = document.createElement("img");
    iconeCarrinho.src = "./src/img/carrinho.png"

    const divProdutosCarrinho = document.createElement("div");
    divProdutosCarrinho.classList.add("produtosCarrinho");

    vitrine.append(carrinho);

    carrinho.append(cabecalhoCarrinho, divProdutosCarrinho);

    cabecalhoCarrinho.append(iconeCarrinho, tituloCarrinho);

    const divCarrinho = document.querySelector(".containerCarrinho");

    const divPreco = document.createElement("div");
    divPreco.classList.add("divPreco");

    const total = document.createElement("h3");
    total.innerText = "Total";

    const valorTotal = document.createElement("h3");
    valorTotal.classList.add("valorTotal");

    const divQuantidade = document.createElement("div");
    divQuantidade.classList.add("divQuantidade");

    const quantidadeProduto = document.createElement("h3");
    quantidadeProduto.classList.add("quantidadeProdutos");

    const quantidade = document.createElement("h3");
    quantidade.innerText = "Quantidade";

    divCarrinho.append(divQuantidade, divPreco);
    divPreco.append(total, valorTotal);
    divQuantidade.append(quantidade, quantidadeProduto);

    renderizaProdutosCarrinho();

}

function renderizaProdutosCarrinho () {

    const produtosCarrinho = document.querySelector(".produtosCarrinho");
    produtosCarrinho.innerText = "";

    const divTotal = document.querySelector(".divPreco");
    const divQuantidade = document.querySelector(".divQuantidade");

    const listaCarrinho = document.createElement("ul");
    listaCarrinho.classList.add("listaCarrinho");

    if (carrinho.length === 0) {
        const imgSacola = document.createElement("img");
        imgSacola.classList.add("imagemSacola");
        imgSacola.src = "./src/img/shopping-bag.png";

        const textoSacola = document.createElement("p");
        textoSacola.classList.add("textoSacola");
        textoSacola.innerText = "Por enquanto não temos produtos no carrinho";

        produtosCarrinho.append(imgSacola, textoSacola);

        divTotal.style = "display: none";
        divQuantidade.style = "display: none";
    } else {

        produtosCarrinho.append(listaCarrinho);

        carrinho.forEach((produto) => {

            const { id, nome, preco, secao, img } = produto;
        
            const listaCarrinho = document.querySelector(".listaCarrinho");
        
            const cardProduto = document.createElement("li");

            const divCardProduto = document.createElement("div");
            const divImage = document.createElement("div");
            const divDescricao = document.createElement("div");
            const divRemover = document.createElement("div");

            divCardProduto.classList.add("divCardProduto");
            divImage.classList.add("imagemCarrinho");
            divDescricao.classList.add("descricao");
            divRemover.classList.add("remover");
        
            const imgProduto = document.createElement("img");
            const nomeProduto = document.createElement("h2");
            const secaoProduto = document.createElement("span");
            const precoProduto = document.createElement("p");
            const botaoRemover = document.createElement("button");
            const imgBotaoRemover = document.createElement("img");
        
            cardProduto.id = `c${id}`;
            imgProduto.src = img;
            imgProduto.classList.add("imgProdutoCarrinho");
            nomeProduto.innerText = nome;
            secaoProduto.innerText = secao;
            precoProduto.innerText =parseInt(preco).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
            });
            precoProduto.classList.add("precoProdutoCarrinho");
            imgBotaoRemover.src = "./src/img/trash.png";
            botaoRemover.classList.add("botaoRemover");
            imgBotaoRemover.classList.add("lixeira");
        
            botaoRemover.addEventListener("click", el => {
                el.preventDefault();
                removerDoCarrinho(id);
            })
        
            listaCarrinho.append(cardProduto);
            cardProduto.append(divCardProduto);
            divCardProduto.append(divImage, divDescricao, divRemover)
            divImage.append(imgProduto);
            divDescricao.append(nomeProduto, secaoProduto, precoProduto);
            divRemover.append(botaoRemover);
            botaoRemover.append(imgBotaoRemover);
        
        })
    
        divTotal.style = "display: flex";
        divQuantidade.style = "display: flex";
    }

}

function adicionaAoCarrinho (produto) {
    carrinho.push(produto);
    renderizaProdutosCarrinho(carrinho);
    calculaValorCarrinho(carrinho)
}

function removerDoCarrinho (id) {
    carrinho.forEach(produto => {
        if(produto.id === id) {
            carrinho.splice(carrinho.indexOf(produto), 1)
        }
    })
    calculaValorCarrinho(carrinho);
    renderizaProdutosCarrinho(carrinho);
}

function calculaValorCarrinho (carrinho) {
    const valorTotal = carrinho.reduce((total, produto) => {
        return total += parseInt(produto.preco, 10);
    }, 0)
  
    const total = document.querySelector(".valorTotal");
    total.innerText = valorTotal.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    const quantidadeProdutos = document.querySelector(".quantidadeProdutos");
    quantidadeProdutos.innerText = carrinho.length;
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

    const inputFiltrarNome = document.querySelector(".campoBuscaPorNome");
    inputFiltrarNome.addEventListener("keypress", el => {
        
        if(event.key === "Enter") {
            el.preventDefault();
            filtrarInput(produtos);
        }
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
carrinhoDeCompras();
buttons(produtos);
