const form = document.getElementById("form_usuario");
const nomes = [];
const telefone = [];

let linhas = "";
form.addEventListener("submit", (e) => {
  e.preventDefault();

  adicionaLinha();
  aidicionaAgenda();
});

function adicionaLinha() {
  const nomeAgenda = document.getElementById("nome_contato");
  const numeroAgenda = document.getElementById("numero_contato");

  const formatado = formataTelefone(numeroAgenda.value);

  if (nomes.includes(nomeAgenda.value)) {
    alert('nome existente')
  } else if(formatado) {
    let linha = "<tr>";
    linha += `<td>${nomeAgenda.value}`;
    linha += `<td>${numeroAgenda.value}`;
    linha += "</tr>";

    linhas += linha;
  }

  nomeAgenda.value = "";
  numeroAgenda.value = "";
}

function aidicionaAgenda() {
  const corpoAgenda = document.querySelector("tbody");
  corpoAgenda.innerHTML = linhas;
}

function formataTelefone(numero) {
    const apenasNumeros = numero.replace(/\D/g, "");

    if (apenasNumeros.length === 10) {
        //residencial
      return apenasNumeros.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3");
    } else if (apenasNumeros.length === 11) {
        //celular
      return apenasNumeros.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
    } else {
        //Numero invaldo
      return alert('numero invalido, o numero deve conter 10 dogotos residencial e 11 digitos celular');
    }

}
