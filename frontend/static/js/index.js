import AdminArea from "./views/AdminArea.js";
import Cart from "./views/Cart.js";
import Contact from "./views/Contact.js";
import Home from "./views/Home.js";
import Login from "./views/Login.js";
import Product from "./views/Product.js";
import Register from "./views/Register.js";
import UserArea from "./views/UserArea.js";

const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );

  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    })
  );
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const checkLogin = () => {
  const logado = JSON.parse(localStorage.getItem("logado"));
  if (logado.length === 0) {
    return Login;
  }
};

const router = async () => {
  const routes = [
    { path: "/", view: Home },
    { path: "/cart", view: Cart },
    { path: "/product", view: Product },
    { path: "/product/:id", view: Product },
    { path: "/contact", view: Contact },
    { path: "/login", view: Login },
    { path: "/userArea", view: UserArea },
    { path: "/adminArea", view: AdminArea },
    { path: "/register", view: Register },
  ];

  // Test each route for potential match
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  );

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }

  const view = new match.route.view(getParams(match));

  document.querySelector("#app").innerHTML = "";
  document.querySelector("#app").appendChild(await view.getHtml());
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  // Verifica login antes de renderizar o botão
  const logado = JSON.parse(localStorage.getItem("logado"));
  if (logado.adminPermission) {
    let arr = document.querySelectorAll("a[href='/login']");
    arr.forEach((el) => {
      el.href = "/adminArea";
      el.innerHTML = `<i class="material-icons left">person</i>Administrador</a
        >`;
    });
  } else if (logado.adminPermission === false) {
    let arr = document.querySelectorAll("a[href='/login']");
    arr.forEach((el) => {
      el.href = "/userArea";
      el.innerHTML = `<i class="material-icons left">person</i>Usuário</a
          >`;
    });
  } else {
    let arr = document.querySelectorAll("a[href='/login']");
    arr.forEach((el) => {
      el.href = "/login";
      el.innerHTML = `<i class="material-icons left">person</i>Entrar</a>`;
    });
  }

  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});
