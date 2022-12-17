export const handleCreateUser = async ()  => {
  const form = document.getElementById("createUser");
  const data = new FormData(form);
  // const usuarios = JSON.parse(localStorage.getItem("usuarios"));
  // let lastKey = parseInt(localStorage.getItem("lastKey"));

  // usuarios[data.get("email")] = { jeito antigo, antes de salvar no banco
  //   password: data.get("password"),
  //   adminPermission: false,
  //   nome: data.get("userNome"),
  //   sobrenome: data.get("sobrenome"),
  //   email: data.get("email"),
  //   telefone: data.get("telefone"),
  //   endereco: data.get("endereco"),
  // };
  // localStorage.setItem("usuarios", JSON.stringify(usuarios));
  
  const body = JSON.stringify({
    password: data.get("password"),
    role: "user",
    name: data.get("userNome") + " " + data.get("sobrenome"),
    email: data.get("email"),
    phone: data.get("telefone"),
    address: data.get("endereco"),
  });

  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body,
  }
  await fetch('http://localhost:8080/user', options).then(response => {
    if(response.status === 400) {
      throw new Error()
    }
    return response.json()    
  }).then(response => {alert(response.message)
    window.location.href = "/login";
  }).catch(error => alert("Não foi possível criar o usuario"))
};

export const handleCreateAdm = async () => {
  const form = document.getElementById("createAdm");
  const data = new FormData(form);
  // const usuarios = JSON.parse(localStorage.getItem("usuarios"));
  // let lastKey = parseInt(localStorage.getItem("lastKey"));

  const body = JSON.stringify({
    password: data.get("password"),
    role: "admin",
    name: data.get("userNome") + " " + data.get("sobrenome"),
    email: data.get("email"),
    phone: data.get("telefone"),
    address: data.get("endereco"),
  });

  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body,
  }

  // alert(JSON.stringify(options))
  await fetch('http://localhost:8080/user', options).then(response => {
    if(response.status === 400) {
      throw new Error()
    }
    return response.json()    
  }).then(response => alert(response.message)).catch(error => alert("Não foi possível criar o usuario administrador"))

  // usuarios[data.get("email")] = {
  //   password: data.get("password"),
  //   adminPermission: true,
  //   nome: data.get("userNome"),
  //   sobrenome: data.get("sobrenome"),
  //   email: data.get("email"),
  //   telefone: data.get("telefone"),
  //   endereco: data.get("endereco"),
  // };
  // localStorage.setItem("usuarios", JSON.stringify(usuarios));
  // alert("Administrador Adicionado!");
};

export const handleUpdateUser = async() => {
  const form = document.getElementById("updateUser");
  const data = new FormData(form);
  const usuarios = JSON.parse(localStorage.getItem("usuarios"));


  const body = JSON.stringify({
    token : localStorage.getItem("tokenUsuario"),
    password: data.get("password"),
    name: data.get("userNome") + " " + data.get("sobrenome"),
    email: data.get("email"),
    phone: data.get("telefone"),
    address: data.get("endereco"),
  });

  const options = {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body,
  }
  await fetch('http://localhost:8080/user/' + JSON.parse(localStorage.getItem("user"))._id, options).then(response => {
    if(response.status === 400) {
      throw new Error()
    }
    localStorage.setItem("user", JSON.stringify({
      token : localStorage.getItem("tokenUsuario"),
      name: data.get("userNome") + " " + data.get("sobrenome"),
      email: data.get("email"),
      phone: data.get("telefone"),
      address: data.get("endereco"),
    }))
    return response.json()    
  }).then(response => alert(response.message)).catch(error => alert("Não foi possível atualizar o usuario"))


  // delete usuarios[data.get("email")];

  // usuarios[data.get("email")] = ;
  // localStorage.setItem("usuarios", JSON.stringify(usuarios));
  window.location.href = "/";

  localStorage.setItem("logado", JSON.stringify({}));
  localStorage.setItem("cart", JSON.stringify({}));
  alert("Perfil alterado, por favor entre novamente!");
};
