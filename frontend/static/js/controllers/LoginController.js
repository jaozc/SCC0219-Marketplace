export const handleLogin = () => {
  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  let notLogin = true;
  const usuarios = JSON.parse(localStorage.getItem("usuarios"));
  for (const key in usuarios) {
    console.log(usuarios[key]);
    if (usuarios[key].email === email) {
      if (usuarios[key].password === password) {
        localStorage.setItem("logado", JSON.stringify(usuarios[key]));
        notLogin = false;
        window.location.href = "/";
        break;
      }
    }
  }
  if (notLogin) alert("Usuário ou Senha inválidos!");
};

export const handleLogoff = () => {
  localStorage.setItem("logado", JSON.stringify({}));
  localStorage.setItem("cart", JSON.stringify({}));
  window.location.href = "/";
  alert("Você foi deslogado!");
};
