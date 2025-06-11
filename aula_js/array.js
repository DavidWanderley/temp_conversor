//criar lista

let nomes = ["ana", "joão", "maria", "pedro"];
let carros = [];

let idades = [18, 20, 25, 30, 35, 40];

const cidadesBrasil = [
  "São Paulo",
  "Rio de Janeiro",
  "Belo Horizonte",
  "Brasília",
  "Salvador",
  "Fortaleza",
  "Curitiba",
  "Recife",
  "Porto Alegre",
  "Manaus",
  "Belém",
  "Goiânia",
  "Guarulhos",
  "Campinas",
  "São Luís",
  "São Gonçalo",
  "Maceió",
  "Duque de Caxias",
];

console.log(`tamanho:  ${cidadesBrasil.length}`);

//limpar lista

console.log(`${idades}`);
idades.length = [];
console.log(`${idades}`);

//adicionar item

carros.push("Kicks");
console.log(`${carros}`);

//remover item
console.log(`${nomes}`);
nomes.pop();
console.log(`${nomes}`);
nomes.shift();
console.log(`${nomes}`);

//buscar item
//percorrer lista
let frutas = ["maçã", "banana", "laranja", "uva", "abacaxi", "kiwi", "morango"];
frutas.forEach(function (item) {
    console.log(`Fruta: ${item}`);
});
