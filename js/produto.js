 const params = new URLSearchParams(window.location.search);
        const id = params.get("id");

        fetch('/produtos.json')
            .then(res => res.json())
            .then(produtos => {
                const produto = produtos.find((_, index) => index == id);
                if (produto) {
                    document.getElementById('detalhes-produto').innerHTML = `
                        <h1 class= "detalhes__nome"> ${produto.nome}</h1>
                        <img class= "detalhes__imagem" src=" ${produto.imagem}"/>
                         <h2 class="detalhes__preco"> Preço: R$${produto.preco}</h2>
                         <h2 class="descricao__titulo"> Descrição:</h2>
                        <p class="detalhes__descricao"> ${produto.descricao}</p>
                        <a class="detalhes__botao" href="/index.html">Voltar para Produtos</a>
                    `;
                } else {
                    document.getElementById('detalhes-produto').innerText = 'Produto não encontrado.';
                }
            });