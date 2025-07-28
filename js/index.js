
const listaProdutos = document.getElementById("mostruario")


fetch ("/produtos.json").then(res => res.json()).then(produtos => {
     
    produtos.forEach(produto => {
 
       const cardProduto = document.createElement('li')

        cardProduto.innerHTML = 

        `<div class= "mostruario__container">
        <img src="${produto.imagem}" class="mostruario__imagem" />
        <h1 class= "mostruario__titulo"> ${produto.nome}<h1>
        <h2 class= "mostruario__preco"> ${produto.preco}<h2>
        <h2 class= "mostruario__descricao"> ${produto.descricao}<h2>
        </div>`
        

        listaProdutos.appendChild(cardProduto)

    });

    
})

