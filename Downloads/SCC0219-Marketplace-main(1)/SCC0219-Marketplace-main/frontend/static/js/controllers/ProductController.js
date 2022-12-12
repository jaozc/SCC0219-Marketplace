export const handleAddProduct = async (e) => {
  const form = document.getElementById("addProduct");
  const data = new FormData(form);
  const produtos = JSON.parse(localStorage.getItem("produtos"));
  let lastKey = parseInt(localStorage.getItem("lastKey"));

  const body = JSON.stringify( {
    //id: lastKey + 1,
    name: data.get("productName"),
    description: data.get("description"),
    price: parseInt(data.get("price")),
    quantity: parseInt(data.get("quantity")),
    image: "./images/" + data.get("filePath"),
    sold: 0,
    token: localStorage.getItem("tokenUsuario")
  });

  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body,
  }

  await fetch('http://localhost:8080/product', options).then(response => {
    if(response.status === 400) {
      throw new Error()
    }
    return response.json()    
  }).then(response => {alert(response.message)
  }).catch(error => alert("Não foi possível criar o produto"))


  // localStorage.setItem("produtos", JSON.stringify(produtos));
  // localStorage.setItem("lastKey", JSON.stringify(lastKey + 1));
  //alert("Produto Adicionado!");
};

export const handleUpdateProduct = async () => {
  const form = document.getElementById("updateProduct");

  const data = new FormData(form);
  const produtos = JSON.parse(localStorage.getItem("produtos"));

  const body = JSON.stringify( 
    {
      id: data.get("productId"),
      name: data.get("productName"),
      description: data.get("description"),
      price: parseInt(data.get("price")),
      quantity: parseInt(data.get("quantity")),
      imagem: "./images/" + data.get("filePath"),
      token: localStorage.getItem("tokenUsuario")
    });

  const options = {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body,
  }
  
  await fetch('http://localhost:8080/product/' + data.get("productId"), options).then(response => {
    if(response.status === 400) {
      throw new Error()
    }
    return response.json()    
  }).then(response => {alert(response.message)
  }).catch(error => alert("Não foi possível atualizar o produto"))


  // alert("Produto Atualizado!");
};
