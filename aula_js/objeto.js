let pessoa = {
  nome: "João",
  cpf: "123.456.789-00",
  genero: "Masculino",
  dataNascimento: "1993-05-15",
  contato: {
    celular: "11987654321",
    telefoneFixo: "1134567890",
    email: "joao@gmail.com",
  },
  endereco: {
    rua: "Rua das Flores",
    numero: 123,
    bairro: "Jardim das Rosas",
    cidade: "São Paulo",
    estado: "SP",
    cep: "01234-567",
    localizacao: {
      latitude: -23.5505,
      longitude: -46.6333,
    },
  },
  adicionar: function () {
    console.log(`Adicionando!`);
  },
  remover: function () {
    console.log(`Removendo!`);
  },
};

console.log(pessoa.endereco);
console.log(pessoa.adicionar());
