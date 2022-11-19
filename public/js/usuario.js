window.onload=function(){
    document.getElementById("sair").addEventListener("click",() => logOut())


    document.getElementById("h1").innerHTML = "Bem vindo, " + 
    JSON.parse(localStorage.getItem("usuario")).nome + "!"
    
    
    function logOut() {
        localStorage.removeItem("usuario")
        location.href = "../pages/homepage.html"
    }
  }