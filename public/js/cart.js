window.onload = function() {
    mountCart();
}

const mountCart = async () => {
    let cart = JSON.parse(localStorage.getItem('cart'));
    let cartContainer = document.getElementById("caixa-principal");
    let totalValue = 0;
    if(cart.length === 0) { // carrinho vazio
        let emptyCart = document.createElement('h2');
        emptyCart.innerHTML = "Seu carrinho está vazio!";
        cartContainer.appendChild(emptyCart);
    } else { // carrinho com produtos
        for(const key in cart) {
            const produto = cart[key];
            totalValue += produto.quantidade * produto.valor;
            // div para cada item
            let item = document.createElement('div');
            item.classList.add('item');
            const flexItem = document.createElement('div');
            flexItem.classList.add('flex-item');
            // criando titulo
            const titleDiv = document.createElement('div');
            const title = document.createElement('p');
            title.classList.add('titulo');
            title.innerHTML = produto.nome;
            titleDiv.appendChild(title);
            // criando descricao
            const descpDiv = document.createElement('div');
            const description = document.createElement('p')
            description.classList.add('descricao');
            description.innerHTML = "Descrição: " + produto.descricao;
            descpDiv.appendChild(description);
            // criando rodape
            const footerDiv = document.createElement('div');
            footerDiv.classList.add('footer')
            //preco
            const preco = document.createElement('span');
            //      preco.classList.add('preco')
            preco.innerHTML = 'Valor: R$ ' + produto.valor;
            //quantidade
            const quantity =  document.createElement('span');
            quantity.innerHTML = 'Quantidade: ' + produto.quantidade;
            //total
            const finalValue = document.createElement('span');
            finalValue.innerHTML = "Total: R$" + produto.quantidade * produto.valor;
            footerDiv.appendChild(preco);
            footerDiv.appendChild(quantity);
            footerDiv.appendChild(finalValue);
            // montando o carrinho
            flexItem.appendChild(titleDiv);
            flexItem.appendChild(descpDiv);
            flexItem.appendChild(footerDiv);
            item.append(flexItem);
            // inserindo na página
            cartContainer.appendChild(item);
        }
        // Criando div de final da compra
        let checkoutDiv = document.createElement('div');
        checkoutDiv.classList.add('total');

        let divValor = document.createElement('div')
        let pValor = document.createElement('p' );
        pValor.innerHTML = "Total: R$ " + totalValue;
        pValor.id = "valor-total";
        divValor.appendChild(pValor);    

        let divCheckout = document.createElement('div');
        let checkout = document.createElement('button');
        checkout.classList.add('button');
        checkout.type = 'button';
        checkout.id= 'finalizar';
        checkout.onclick='finalizarCompra()';
        checkout.innerHTML = 'Finalizar';
        divCheckout.appendChild(checkout);

        checkoutDiv.appendChild(divValor);
        checkoutDiv.appendChild(divCheckout);
        cartContainer.appendChild(checkoutDiv)


    }
}