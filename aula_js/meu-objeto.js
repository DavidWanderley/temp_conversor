let curso = {
  nome: "Web Full Stack",
  duracao: "1 ano",
    instituicao: "Digital College",
  sala: "Sala 101",
  horario: "Segunda a Sexta, das 19h às 22h",
  conteudo: {
    frontEnd: ["HTML", "CSS", "JavaScript"],
    backEnd: ["Node.js", "Express", "MongoDB"],
    devOps: ["Docker", "Kubernetes"],
  },
  instrutores: {
    nome: "Angelo",
    idades: 35,
    especialidade: "BD e Full Stack",
    experiencia: "10 anos",
    contato: {
      email: "asd@gmail.com",
      telefone: "859-1234-5678",
    },
  },
  matricular: function () {
    console.log(`Matriculando!`);
  },
};


console.log(curso);