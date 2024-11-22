const urlbase = "postgresql://postgre:bFliNn8RLTEOz7FHLlkRxiuLBSznvJr5@dpg-ct0g0pt6l47c73b4omqg-a.oregon-postgres.render.com/abp_teste";
// Variável usada para manter os dados do usuário logado
// A função carregarLogin verifica se o usuário está logado e carrega na variável usuarioLogado
let usuarioLogado = undefined;

// Recuperar os dados de login que estão no localStorage do navegador
function carregarLogin() {
  // os dados estão na propriedade usuario do localStorage
  let objeto = localStorage.getItem("usuario");
  // JSON.parse() converte uma string JSON em um objeto JS
  usuarioLogado = JSON.parse(objeto);
}

function logout() {
  // Remover a propriedade `usuario` do localStorage
  localStorage.removeItem("usuario");
  // Redireciona para a página de login
  window.location.href = "./login.html";
}

function login() {
  // Redireciona para a página de login
  window.location.href = "./login.html";
}
