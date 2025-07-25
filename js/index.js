

fetch ("/produtos.json").then(res => res.json()).then(produtos => {

    console.log(produtos)
})