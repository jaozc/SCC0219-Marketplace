window.onload = function() {
    mountCart();
}

const mountCart = async () => {
    let cart = JSON.parse(localStorage.getItem('cart'));
    let cartContainer = document.getElementById("caixa-principal");
    let totalValue = 0;

    if(Object.keys(cart).length === 0) 
    { // carrinho vazio
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
            // remover item
            let removeItem = document.createElement('a');
            removeItem.innerHTML = 'remover';
            removeItem.onclick = deleteItem;
            removeItem.href = '../pages/carrinho.html';
            removeItem.dataset.nome = produto.nome;
            flexItem.appendChild(removeItem);
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
        checkout.onclick = finalizaCompra;
        checkout.innerHTML = 'Finalizar';
        divCheckout.appendChild(checkout);

        checkoutDiv.appendChild(divValor);
        checkoutDiv.appendChild(divCheckout);
        cartContainer.appendChild(checkoutDiv)
    }
}

const finalizaCompra = async () => {
    let cart = JSON.parse(localStorage.getItem('cart'));
    let produtos = JSON.parse(localStorage.getItem('produtos'));
    for(const key in cart)  {
        const item = cart[key];
        if(verificaQuantidade(item))
        {
            produtos[item.id].quantidade -= item.quantidade;
            produtos[item.id].vendidos += item.quantidade;
        }
        else
        {
            if(produtos[item.id].quantidade === 0)
            {
                alert("Não temos ["+ item.nome +"] em estoque!");
            } else {
                alert("Não temos [" + item.nome + "] o suficiente em estoque!");
                cart[item.nome].quantidade = produtos[item.id].quantidade;
                localStorage.removeItem('cart');
                localStorage.setItem('cart', JSON.stringify(cart));
                window.location.replace("../pages/carrinho.html");  
            }
            
            return;
        }
    }
    localStorage.removeItem('produtos');
    localStorage.setItem('produtos', JSON.stringify(produtos));
    cart = {};
    localStorage.removeItem('cart');
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Compra finalizada com sucessso!');
    window.location.replace("../pages/carrinho.html");

}

const verificaQuantidade = (item) => {
    let produtos = JSON.parse(localStorage.getItem('produtos'));
    const quantidadeVendida = item.quantidade;
    console.log(item)
    const quantidadeEstoque = produtos[item.id].quantidade;
    return quantidadeVendida <= quantidadeEstoque;
}

const deleteItem = async (e) => {
    const itemNome = e.target.dataset.nome;
    let cart = JSON.parse(localStorage.getItem('cart'));
    delete cart[itemNome];
    localStorage.removeItem('cart');
    localStorage.setItem('cart', JSON.stringify(cart));

}