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

  const nome = nomeAgenda.value.trim();
  const numero = numeroAgenda.value.trim();

  const formatado = formataTelefone(numero);

  // Verifica se o nome (sem considerar letras maiúsculas/minúsculas) já existe
  if (nomes.some(n => n.toLowerCase() === nome.toLowerCase())) {
    alert("Nome já existe na agenda!");
  } else if (formatado) {
    // Cria a linha da tabela com o número formatado
    let linha = "<tr>";
    linha += `<td class="nomeNumero">${nome}</td>`;
    linha += `<td class="bgNumero">${formatado}</td>`;
    linha += "</tr>";

    linhas += linha;

    // Adiciona aos arrays
    nomes.push(nome);
    telefone.push(formatado);
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
    // Residencial
    return apenasNumeros.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3");
  } else if (apenasNumeros.length === 11) {
    // Celular
    return apenasNumeros.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
  } else {
    alert("Número inválido. Deve conter 10 dígitos (fixo) ou 11 dígitos (celular).");
    return null;
  }
}
