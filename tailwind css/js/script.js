const cursos = {
    html: {
      titulo: "Curso de HTML",
      descricao: "Neste curso você aprenderá a criar a estrutura de páginas web utilizando HTML. Você verá como trabalhar com títulos, parágrafos, imagens, links, tabelas, listas, formulários e botões. O HTML é a base de qualquer site e é o primeiro passo para quem deseja entrar no mundo do desenvolvimento web.",
      duracao: "12h",
      nivel: "Iniciante",
      icone: "🌐",
      nome: "HTML"
    },
    css: {
      titulo: "Curso de CSS",
      descricao: "Neste curso você aprenderá a estilizar páginas web utilizando CSS. Você verá como trabalhar com cores, fontes, espaçamentos, bordas, posicionamento, responsividade e layouts modernos. O CSS é essencial para deixar um site bonito, organizado e profissional.",
      duracao: "14h",
      nivel: "Intermediário",
      icone: "🎨",
      nome: "CSS"
    },
    javascript: {
      titulo: "Curso de JavaScript",
      descricao: "Neste curso você aprenderá a adicionar interatividade às páginas web. Você verá como trabalhar com eventos, cliques, validações, funções, variáveis, manipulação do HTML e muito mais. O JavaScript é o que torna um site dinâmico e inteligente.",
      duracao: "16h",
      nivel: "Avançado",
      icone: "⚙️",
      nome: "JavaScript"
    }
  };
  
  const botoes = document.querySelectorAll(".curso-btn");
  const detalhes = document.getElementById("detalhes-curso");
  
  const tituloCurso = document.getElementById("titulo-curso");
  const descricaoCurso = document.getElementById("descricao-curso");
  const duracaoCurso = document.getElementById("duracao-curso");
  const nivelCurso = document.getElementById("nivel-curso");
  const iconeCurso = document.getElementById("icone-curso");
  const nomeBox = document.getElementById("nome-box");
  const horasBox = document.getElementById("horas-box");
  const matricular = document.getElementById("matricular");
  const voltar = document.getElementById("voltar");
  
  botoes.forEach(botao => {
    botao.addEventListener("click", function () {
      const curso = this.getAttribute("data-curso");
      const dados = cursos[curso];
  
      tituloCurso.textContent = dados.titulo;
      descricaoCurso.textContent = dados.descricao;
      duracaoCurso.textContent = dados.duracao;
      nivelCurso.textContent = dados.nivel;
      iconeCurso.textContent = dados.icone;
      nomeBox.textContent = dados.nome;
      horasBox.textContent = dados.duracao;
  
      detalhes.classList.remove("escondido");
      detalhes.scrollIntoView({ behavior: "smooth" });
    });
  });
  
  matricular.addEventListener("click", function () {
    alert("Matrícula realizada com sucesso!");
  });
  
  voltar.addEventListener("click", function () {
    detalhes.classList.add("escondido");
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });