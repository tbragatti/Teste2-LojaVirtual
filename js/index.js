
const listaProdutos = document.getElementById("mostruario")


fetch ("/produtos.json").then(res => res.json()).then(produtos => {
     
    produtos.forEach(produto => {
 
       const cardProduto = document.createElement('li')

        cardProduto.innerHTML = 

        `<img src=${produto.imagem} alt="Dinosaur" />
        <h1> ${produto.nome}<h1>
        <h2> ${produto.preco}<h2>
        <h2> ${produto.descricao}<h2>
        `

        listaProdutos.appendChild(cardProduto)

    });

    
})

