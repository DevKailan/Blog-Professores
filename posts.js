const jogos = [
  {
    titulo: "Brincando com Ariê 1",
    ano: "1º Ano EF",
    descricao: "Coletânea de 4 mini-jogos de alfabetização com o leãozinho Ariê (colorir, memória, frutas e caminho).",
    imagem: "https://brincandocomarie.com.br/images/arie-1_cel.jpg",
    link: "https://brincandocomarie.com.br/arie-1"
  },
  {
    titulo: "Brincando com Ariê 2",
    ano: "1º Ano EF",
    descricao: "Conjunto de 3 jogos educativos com o leão Ariê: Elevador (agrupa letras), Bolhas (caça-palavras), Biscoitos (contar e somar).",
    imagem: "https://brincandocomarie.com.br/images/arie-2.jpg",
    link: "https://brincandocomarie.com.br/arie-2"
  },
  {
    titulo: "Brincando com o Ariê 3",
    ano: "1º Ano EF",
    descricao: "Novos desafios de alfabetização com o leãozinho Ariê em fases variadas, onde a criança reforça sílabas e forma palavras de forma interativa e divertida.",
    imagem: "https://brincandocomarie.com.br/images/arie-3.jpg",
    link: "https://brincandocomarie.com.br/arie-3"
  },
  {
    titulo: "Liga dos Craques - Libertadores",
    ano: "1º Ano EF",
    descricao: "Versão especial da “Liga dos Craques” com tema da Copa Libertadores: além de formar palavras com sílabas, o jogador explora estádios de diferentes países da América do Sul. Ideal para reforçar o vocabulário e conhecer mais sobre a competição.",
    imagem: "https://brincandocomarie.com.br/images/libertadores_2019.jpg",
    link: "https://brincandocomarie.com.br/liga-libertadores-2019"
  },
  {
    titulo: "Yuki no Caminho das Letras",
    ano: "1º Ano EF",
    descricao: "Ajude o gato Yuki a atravessar um percurso repleto de letras, selecionando a sílaba correta em cada etapa para formar palavras e avançar no caminho de forma lúdica.",
    imagem: "https://brincandocomarie.com.br/images/arie-yuki-letras.jpg",
    link: "https://brincandocomarie.com.br/arie-yuki-letras"
  },
  {
    titulo: "Luna no Caminho das Letras",
    ano: "1º Ano EF",
    descricao: "Luna percorre um trajeto decorado com letras, onde a criança deve escolher a sílaba certa para formar palavras e ajudar a gatinha a chegar ao fim do caminho de forma divertida e educativa.",
    imagem: "https://brincandocomarie.com.br/images/arie-luna-letras.jpg",
    link: "https://brincandocomarie.com.br/arie-luna-letras"
  },
  {
    titulo: "Cocoricó",
    ano: "1º Ano EF",
    descricao: "Mini-jogos com os personagens do Cocoricó em que a criança aprende letras e forma palavras ao interagir com objetos e animais da fazenda, reforçando vocabulário de maneira lúdica.",
    imagem: "https://brincandocomarie.com.br/images/cocorico.jpg",
    link: "https://brincandocomarie.com.br/cocorico"
  },
  {
    titulo: "Come Letras",
    ano: "1º Ano EF",
    descricao: "Desafie-se a arrastar as letras corretas para formar palavras antes que o monstrinho as engula, exercitando rapidez de pensamento e reconhecimento de fonemas.",
    imagem: "https://brincandocomarie.com.br/images/come-letras.jpg",
    link: "https://brincandocomarie.com.br/come-letras"
  },
  {
    titulo: "Come Zap",
    ano: "1º Ano EF",
    descricao: "Variante acelerada do “Come Letras”, onde a criança deve arrastar letras para formar palavras enquanto desvia de obstáculos coloridos e corre contra o tempo, aprimorando agilidade mental e reconhecimento de fonemas.",
    imagem: "https://brincandocomarie.com.br/images/come_zap.jpg",
    link: "https://brincandocomarie.com.br/come-zap"
  },
  {
    titulo: "Matbot- Soma",
    ano: "1º Ano EF",
    descricao: "Ajude o robô Matbot a completar circuitos eletrônicos resolvendo operações de soma. Cada resultado correto faz o Matbot avançar por um cenário cheio de engrenagens e luzes, reforçando o conceito de adição.",
    imagem: "https://brincandocomarie.com.br/images/matbot.jpg",
    link: ""
  },
  {
    titulo: "Matbot- Subtração",
    ano: "1º Ano EF",
    descricao: "Desafie-se guiando o Matbot através de labirintos numéricos, resolvendo subtrações para destravar portas e chegar ao final de cada fase, exercitando o raciocínio aritmético de forma divertida.",
    imagem: "https://brincandocomarie.com.br/images/matbot_subtracao.jpg",
    link: ""
  },
  {
    titulo: "Cruzabot",
    ano: "1º Ano EF",
    descricao: "Jogo de cruzadinhas interativas: preencha os espaços em branco com as letras corretas para formar palavras, descobrindo dicas e expandindo o vocabulário de maneira lúdica.",
    imagem: "https://brincandocomarie.com.br/images/cruzabot.jpg",
    link: ""
  },
  {
    titulo: "Sereia Maria e as Formas",
    ano: "1º Ano EF",
    descricao: "Participe de uma aventura submarina com a Sereia Maria, associando peixinhos a formas geométricas (círculo, quadrado, triângulo, retângulo) para aprender conceitos básicos de geometria.",
    imagem: "https://brincandocomarie.com.br/images/sereia-maria-formas.jpg",
    link: ""
  },
  {
    titulo: "Heróis contra a Poluição",
    ano: "1º Ano EF",
    descricao: "Vista a capa de super-herói e escreva números de 1 a 10 por extenso para combater monstros de poluição. Uma forma criativa de reforçar escrita numérica e conscientização ambiental.",
    imagem: "https://brincandocomarie.com.br/images/herois-poluicao-numeros.jpg",
    link: ""
  },
  {
    titulo: "Capitão Alberto e o Tesouro do Faraó",
    ano: "1º Ano EF",
    descricao: "Ajude o Capitão Alberto a desvendar palavras escondidas em hieróglifos do Antigo Egito, formando termos corretamente para descobrir o tesouro perdido.",
    imagem: "https://brincandocomarie.com.br/images/capitao-alberto-farao.jpg",
    link: "https://brincandocomarie.com.br/capitao-alberto-farao"
  },
  {
    titulo: "Fórmula Kids – Desafio em Marte",
    ano: "1º Ano EF",
    descricao: "Leve o foguete até Marte resolvendo sequências lógicas e problemas matemáticos, completando fórmulas para avançar em um cenário espacial.",
    imagem: "https://brincandocomarie.com.br/images/formula_marte.jpg",
    link: "https://brincandocomarie.com.br/formulakids-marte"
  },
  {
    titulo: "Ariê Opostos",
    ano: "1º Ano EF",
    descricao: "Separe pares de palavras por significado oposto (alto/baixo, quente/frio etc.), reforçando o conceito de antônimos de forma interativa.",
    imagem: "https://brincandocomarie.com.br/images/arie-opostos.jpg",
    link: "https://brincandocomarie.com.br/arie-opostos"
  },
  {
    titulo: "Ariê e os Patinhos – Alfabeto",
    ano: "1º Ano EF",
    descricao: "Oriente os patinhos na ordem das letras do alfabeto, clicando na sequência correta para formar o alfabeto completo.",
    imagem: "https://brincandocomarie.com.br/images/arie-patinhos.jpg",
    link: "https://brincandocomarie.com.br/arie-patinhos"
  },
  {
    titulo: "Ariê e os Patinhos – Números",
    ano: "1º Ano EF",
    descricao: "Coloque os patinhos em ordem de 1 a 20 (em números arábicos ou romanos), aprendendo contagem e reconhecimento de numerais.",
    imagem: "https://brincandocomarie.com.br/images/arie-patinhos-numeros.jpg",
    link: "https://brincandocomarie.com.br/arie-patinhos-numeros"
  },
  {
    titulo: "Ariê e Yuki contra os Mosquitos",
    ano: "1º Ano EF",
    descricao: "Combine palavras corretamente para espantar os mosquitos que atrapalham Ariê e Yuki, exercitando vocabulário e consciência sobre saúde.",
    imagem: "https://brincandocomarie.com.br/images/arie-mosquitos_2.jpg",
    link: "https://brincandocomarie.com.br/arie-mosquitos"
  },
  {
    titulo: "Ariê Memória Alfabeto",
    ano: "1º Ano EF",
    descricao: "Jogo da memória com cartas de letras: vire pares iguais para fixar o alfabeto e reforçar o reconhecimento de cada símbolo de forma divertida.",
    imagem: "https://brincandocomarie.com.br/images/arie-memoria_letras_BR.jpg",
    link: "https://brincandocomarie.com.br/arie-memoria-alfabeto"
  },
  {
    titulo: "QKids Países",
    ano: "1º Ano EF",
    descricao: "Quebra-cabeça interativo em que você monta imagens de bandeiras e associa ao nome correto do país, aprimorando conhecimentos de geografia.",
    imagem: "https://brincandocomarie.com.br/images/qkids_paises.jpg",
    link: "https://brincandocomarie.com.br/qkids-paises"
  },
  {
    titulo: "Pula Pula",
    ano: "1º Ano EF",
    descricao: "Quebra-cabeça interativo em que você monta imagens de bandeiras e associa ao nome correto do país, aprimorando conhecimentos de geografia.",
    imagem: "https://brincandocomarie.com.br/images/pula-pula.jpg",
    link: "https://brincandocomarie.com.br/pula-pula"
  },
  {
    titulo: "Noel Skate",
    ano: "1º Ano EF",
    descricao: "Papai Noel desliza de skate por cenários natalinos, desviando de obstáculos e coletando presentes–sílabas, estimulando a alfabetização em clima festivo.",
    imagem: "https://brincandocomarie.com.br/images/noel-skate.jpg",
    link: "https://brincandocomarie.com.br/noel-skate"
  },
  {
    titulo: "Yuki Detetive",
    ano: "1º Ano EF",
    descricao: "O gato Yuki é detetive em 4 brincadeiras de matemática (formas, grandezas, sequências e contas) para resolver mistérios.",
    imagem: "https://brincandocomarie.com.br/images/yuki-detetive.png",
    link: "https://brincandocomarie.com.br/yuki-detetive"
  },
  {
    titulo: "AeroKids",
    ano: "1º Ano EF",
    descricao: "Pilote um avião no Pantanal e colete sílabas no caminho, aprendendo famílias silábicas de forma divertida.",
    imagem: "https://brincandocomarie.com.br/images/aeroKids.png",
    link: "https://brincandocomarie.com.br/aerokids"
  },
  {
    titulo: "ABC Kart",
    ano: "1º Ano EF",
    descricao: "Corrida em kart para aprender o alfabeto: passe sobre as letras e desvie de obstáculos nas pistas.",
    imagem: "https://brincandocomarie.com.br/images/abckart.jpg",
    link: "https://brincandocomarie.com.br/abckart"
  },
  {
    titulo: "Desafio U vs L",
    ano: "2º Ano EF",
    descricao: "Complete as palavras com 'U' ou 'L' junto aos pintinhos, reforçando o fonema /w/ em final de sílaba.",
    imagem: "https://brincandocomarie.com.br/images/desafio-u-l.jpg",
    link: "https://brincandocomarie.com.br/desafio-u-l"
  },
  {
    titulo: "Capitão Pirata – Palavras",
    ano: "2º Ano EF",
    descricao: "Desafio no estilo 'forca': desvende a palavra escondida acertando letras para vencer batalha pirata.",
    imagem: "https://brincandocomarie.com.br/images/capitao-alberto-pirata.jpg",
    link: "https://brincandocomarie.com.br/capitao-alberto-pirata"
  },
  {
    titulo: "Desafio E vs I",
    ano: "2º Ano EF",
    descricao: "Escolha a vogal correta (“E” ou “I”) para completar palavras do campo. Ideal para alunos que estão aprendendo a distinguir sons vocálicos semelhantes.",
    imagem: "https://brincandocomarie.com.br/images/desafio-e-i.jpg",
    link: "https://brincandocomarie.com.br/desafio-e-i"
  },
  {
    titulo: "Desafio J vs G",
    ano: "2º Ano EF",
    descricao: "Complete palavras selecionando a consoante certa entre “J” ou “G” e evite erros de grafia. Jogo focado em ortografia e sons consonantais próximos.",
    imagem: "https://brincandocomarie.com.br/images/desafio-j-g.jpg",
    link: "https://brincandocomarie.com.br/desafio-j-g"
  },
  {
    titulo: "Yuki e os Vilões",
    ano: "2º Ano EF",
    descricao: "Jogo de aventura com o gato Yuki enfrentando vilões em mini-jogos que envolvem lógica, leitura e matemática. Ideal para revisar conteúdos de forma divertida.",
    imagem: "https://brincandocomarie.com.br/images/yuki-e-os-viloes-3.jpg",
    link: "https://brincandocomarie.com.br/desafio-j-g"
  },
  {
    titulo: "Ariê Somando",
    ano: "2º Ano EF",
    descricao: "Ajude Ariê a resolver contas de adição para vencer desafios e encontrar tesouros escondidos. Ótimo para fixar noções básicas de soma.",
    imagem: "https://brincandocomarie.com.br/images/arie-subtrair.jpg",
    link: "https://brincandocomarie.com.br/arie-somando"
  },
  {
    titulo: "Chapeuzinho e o Enigma da Floresta",
    ano: "2º Ano EF",
    descricao: "Ajude a Chapeuzinho a resolver enigmas de leitura e lógica para atravessar a floresta com segurança. Estimula raciocínio e interpretação.",
    imagem: "https://brincandocomarie.com.br/images/chapeuzinho-enigma.jpg",
    link: "https://brincandocomarie.com.br/chapeuzinho-enigma"
  },
  {
    titulo: "Ariê Subtrair",
    ano: "2º Ano EF",
    descricao: "Resolva operações de subtração junto com Ariê em fases lúdicas com obstáculos e inimigos. Excelente para introduzir a subtração de forma leve.",
    imagem: "https://brincandocomarie.com.br/images/arie-subtrair.jpg",
    link: "https://brincandocomarie.com.br/arie-subtrair"
  },
  {
    titulo: "Ariê Somando",
    ano: "2º Ano EF",
    descricao: "Ajude Yuki a achar tesouros na caverna somando números. Aventura assustadora com esqueletos piratas.",
    imagem: "https://brincandocomarie.com.br/images/arie-somando.jpg",
    link: "https://brincandocomarie.com.br/arie-somando"
  },
  {
    titulo: "Desafio M vs N",
    ano: "3º Ano EF",
    descricao: "Ajude os pinguins a escolher a letra correta entre “M” e “N” para completar palavras. Um ótimo jogo para treinar ortografia e distinguir sons nasais em diferentes contextos.",
    imagem: "https://brincandocomarie.com.br/images/desafio-m-n.jpg",
    link: "https://brincandocomarie.com.br/desafio-m-n"
  },
  {
    titulo: "Zumzumbi",
    ano: "3º Ano EF",
    descricao: "Atire sílabas corretas para afastar zumbis e abelhas ameaçadoras. Mistura ação com alfabetização, incentivando leitura e raciocínio rápido.",
    imagem: "https://brincandocomarie.com.br/images/zumzumbi.jpg",
    link: "https://brincandocomarie.com.br/zumzumbi"
  },
  {
    titulo: "Desafio S vs Z",
    ano: "4º Ano EF",
    descricao: "Encontre pares de letras idênticas no tabuleiro. Desafie sua memória visual e fixe o alfabeto.",
    imagem: "https://brincandocomarie.com.br/images/desafio-s-z.jpg",
    link: "https://brincandocomarie.com.br/desafio-s-z/"
  },
  {
    titulo: "Desafio X vs CH",
    ano: "4º Ano EF",
    descricao: "Corrida de futebol: junte sílabas e forme palavras no campo para ganhar bônus especiais e muitos pontos.",
    imagem: "https://brincandocomarie.com.br/images/desafio-x-ch.jpg",
    link: "https://brincandocomarie.com.br/desafio-x-ch/"
  },
  {
    titulo: "Ariê Tabuada",
    ano: "4º Ano EF",
    descricao: "Papai Noel em skate na praia! Ajude-o a coletar presentes e evitar obstáculos. Una educação e diversão natalina.",
    imagem: "https://brincandocomarie.com.br/images/arie-tabuada.jpg",
    link: "https://brincandocomarie.com.br/arie-tabuada"
  },
  {
    titulo: "Kids vs Covid",
    ano: "4º Ano EF",
    descricao: "Ajude um pequeno herói a enfrentar o coronavírus respondendo corretamente perguntas sobre prevenção e higiene. Mistura conscientização e educação com jogabilidade leve",
    imagem: "https://brincandocomarie.com.br/images/kids-vs-covid.jpg",
    link: "https://brincandocomarie.com.br/kids-vs-covid"
  }
];

// Função que cria os cards a partir do array de objetos
function gerarCards() {
  jogos.forEach(jogo => {
    let containerId = "";
    if (jogo.ano.includes("Infantil")) containerId = "cards-inf";
    else if (jogo.ano.startsWith("1")) containerId = "cards-1";
    else if (jogo.ano.startsWith("2")) containerId = "cards-2";
    else if (jogo.ano.startsWith("3")) containerId = "cards-3";
    else if (jogo.ano.startsWith("4")) containerId = "cards-4";
    else if (jogo.ano.startsWith("5")) containerId = "cards-5";

    const container = document.getElementById(containerId);
    if (!container) return;

    const col = document.createElement("div");

    if (window.innerWidth <= 768) {
      col.className = "col-12 mb-3";
    } else {
      col.className = "col-md-4 mb-3";
    }

    col.innerHTML = `
      <div class="card">
        <a href="${jogo.link}" target="_blank">
          <img src="${jogo.imagem}" class="card-img-top" alt="${jogo.titulo}">
        </a>
        <div class="card-body">
          <h5 class="card-title">${jogo.titulo}</h5>
          <p class="card-text"><strong>Ano:</strong> ${jogo.ano}</p>
          <p class="card-text">${jogo.descricao}</p>
        </div>
      </div>
    `;
    container.appendChild(col);
  });
}

window.onload = gerarCards;
