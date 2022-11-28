export const handleAddProduct = (e) => {
  const form = document.getElementById("addProduct");
  const data = new FormData(form);
  const produtos = JSON.parse(localStorage.getItem("produtos"));
  let lastKey = parseInt(localStorage.getItem("lastKey"));

  produtos[lastKey + 1] = {
    id: lastKey + 1,
    nome: data.get("productName"),
    descricao: data.get("description"),
    valor: parseInt(data.get("price")),
    quantidade: parseInt(data.get("quantity")),
    urlImage: "./images/" + data.get("filePath"),
    vendidos: 0,
  };
  localStorage.setItem("produtos", JSON.stringify(produtos));
  localStorage.setItem("lastKey", JSON.stringify(lastKey + 1));
  alert("Produto Adicionado!");
};

export const handleUpdateProduct = () => {
  const form = document.getElementById("updateProduct");
  const data = new FormData(form);
  const produtos = JSON.parse(localStorage.getItem("produtos"));

  produtos[data.get("productId")] = {
    id: data.get("productId"),
    nome: data.get("productName"),
    descricao: data.get("description"),
    valor: parseInt(data.get("price")),
    quantidade: parseInt(data.get("quantity")),
    urlImage: "./images/" + data.get("filePath"),
    vendidos: 0,
  };
  localStorage.setItem("produtos", JSON.stringify(produtos));
  alert("Produto Atualizado!");
};
