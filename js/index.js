const listaProdutos = document.getElementById("mostruario")

fetch("../produtos.json").then(async res => {
    const produtos = await res.json()

    produtos.forEach((produto, index) => {
        const cardProduto = document.createElement('li')

        cardProduto.innerHTML =
            `<a href="../pages/produto?id=${index}">
                <div id="mostruario__container">
                    <img src="${produto.imagem}" class="mostruario__imagem" />
                    <h1 class= "mostruario__titulo"> ${produto.nome}</h1>
                    <h2 class= "mostruario__preco"> R$ ${produto.preco}</h2>
                </div>
            </a>`

        listaProdutos.appendChild(cardProduto)
    })
})



