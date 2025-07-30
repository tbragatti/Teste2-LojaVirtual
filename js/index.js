
const listaProdutos = document.getElementById("mostruario")

fetch ("/produtos.json").then(res => res.json()).then(produtos => {

    
     
    produtos.forEach((produto, index) => {
 
       const cardProduto = document.createElement('li')

        cardProduto.innerHTML = 

        `<div id= "mostruario__container" onclick="window.location.href='/pages/produto.html?id=${index}'">
        <img src="${produto.imagem}" class="mostruario__imagem" />
        <h1 class= "mostruario__titulo"> ${produto.nome}<h1>
        <h2 class= "mostruario__preco"> R$ ${produto.preco}<h2>
         </div>`
        
        
        listaProdutos.appendChild(cardProduto)

        

    });

    
})


