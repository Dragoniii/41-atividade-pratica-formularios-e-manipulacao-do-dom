const formulario = document.getElementById("form");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nome = document.getElementById("nome").value;
  const endereco = document.getElementById("endereco").value;
  const email = document.getElementById("email").value;
  const estado = document.getElementById("estado").value;

  const naturezaDoCargo = document.querySelector(
    'input[name="cargo"]:checked'
  ).value;

  const areaDeInteresse = [];
  document
    .querySelectorAll('input[name="area"]:checked')
    .forEach(function (elemento) {
        areaDeInteresse.push(elemento.value);
    });

  const miniCurriculo = document.getElementById("curriculo").value;

  console.log("Nome:   " + nome);
  console.log("Endereco:   " + endereco);
  console.log("Email:   " + email);
  console.log("Estado:   " + estado);
  console.log("Natureza do cargo:   " + naturezaDoCargo);
  console.log("Area de interesse:   " + areaDeInteresse);
  console.log("Mini-currículo:   " + miniCurriculo);
});
