export const handleCreateUser = () => {
  const form = document.getElementById("createUser");
  const data = new FormData(form);
  const usuarios = JSON.parse(localStorage.getItem("usuarios"));
  let lastKey = parseInt(localStorage.getItem("lastKey"));

  usuarios[data.get("email")] = {
    password: data.get("password"),
    adminPermission: false,
    nome: data.get("userNome"),
    sobrenome: data.get("sobrenome"),
    email: data.get("email"),
    telefone: data.get("telefone"),
    endereco: data.get("endereco"),
  };
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  alert("Usuário Adicionado!");
};

export const handleCreateAdm = () => {
  const form = document.getElementById("createAdm");
  const data = new FormData(form);
  const usuarios = JSON.parse(localStorage.getItem("usuarios"));
  let lastKey = parseInt(localStorage.getItem("lastKey"));

  usuarios[data.get("email")] = {
    password: data.get("password"),
    adminPermission: true,
    nome: data.get("userNome"),
    sobrenome: data.get("sobrenome"),
    email: data.get("email"),
    telefone: data.get("telefone"),
    endereco: data.get("endereco"),
  };
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  alert("Administrador Adicionado!");
};

export const handleUpdateUser = () => {
  const form = document.getElementById("updateUser");
  const data = new FormData(form);
  const usuarios = JSON.parse(localStorage.getItem("usuarios"));

  delete usuarios[data.get("email")];

  usuarios[data.get("email")] = {
    password: data.get("password"),
    adminPermission: false,
    nome: data.get("userNome"),
    sobrenome: data.get("sobrenome"),
    email: data.get("email"),
    telefone: data.get("telefone"),
    endereco: data.get("endereco"),
  };
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  window.location.href = "/";

  localStorage.setItem("logado", JSON.stringify({}));
  localStorage.setItem("cart", JSON.stringify({}));
  alert("Perfil alterado, por favor entre novamente!");
};
