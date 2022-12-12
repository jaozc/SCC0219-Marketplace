export const handleLogin = async () => {
  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  // let notLogin = true;
  // const usuarios = JSON.parse(localStorage.getItem("usuarios"));
  // for (const key in usuarios) {
  //   console.log(usuarios[key]);
  //   if (usuarios[key].email === email) {
  //     if (usuarios[key].password === password) {
  //       localStorage.setItem("logado", JSON.stringify(usuarios[key]));
  //       notLogin = false;
  //       window.location.href = "/";
  //       break;
  //     }
  //   }
  // }
  // if (notLogin) alert("Usuário ou Senha inválidos!");
  const body = JSON.stringify({ email, password });
  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body,
  }

  await fetch('http://localhost:8080/user/login', options).then(T => T.json()).then(response => {
    if(response != null) {
      console.log(response)
      localStorage.setItem("tokenUsuario", response.token)
      localStorage.setItem("user", JSON.stringify(response.user))
      alert("olá " + response.user.name)
      window.location.href = "/";
    }
   }).catch(() => alert("Usuario não encontrado"));


};

export const handleLogoff = () => {
  localStorage.setItem("cart", JSON.stringify({}));
  localStorage.setItem("tokenUsuario", JSON.stringify({}))
  localStorage.setItem("user", JSON.stringify({}))
  window.location.href = "/";
  alert("Você foi deslogado!");
};
