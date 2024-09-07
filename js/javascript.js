const singerInfo = {
  cantor1: {
    name: "Alcione",
    info: "A Rainha do Samba, com uma voz marcante e soul, é uma das maiores intérpretes do samba brasileiro. Sua música mais famosa é 'A Loba'.",
    link: "https://www.youtube.com/watch?v=7zAm_TFOZqQ"
  },
  cantor2: {
    name: "Johnny Cash",
    info: "Ícone do country e do rock and roll, conhecido por sua voz grave e letras que abordavam temas como a vida na prisão e a fé. Sua música mais famosa é 'Ring of Fire'.",
    link: "https://www.youtube.com/watch?v=1WaV2x8GXj0"
  },
  cantor3: {
    name: "Luiz Gonzaga",
    info: "O Rei do Baião, responsável por popularizar o baião e outros ritmos nordestinos pelo Brasil. Sua música mais famosa é 'Asa Branca'.",
    link: "https://www.youtube.com/watch?v=zIy3EwyBBI0"
  },
  cantor4: {
    name: "David Gilmour",
    info: "Guitarrista e vocalista do Pink Floyd, conhecido por seus solos de guitarra melódicos e emotivos. Sua música mais famosa (como membro do Pink Floyd) é 'Comfortably Numb'.",
    link: "https://www.youtube.com/watch?v=x-xTttimcNk"
  },
  cantor5: {
    name: "Alok",
    info: "DJ e produtor musical brasileiro, um dos maiores nomes da música eletrônica no país. Sua música mais famosa é 'Hear Me Now'.",
    link: "https://www.youtube.com/watch?v=bbOw3Q2cRrw"
  },
  cantor6: {
    name: "Beethoven",
    info: "Compositor clássico alemão, considerado um dos maiores gênios da música de todos os tempos. Sua obra mais conhecida é a 'Sinfonia Nº 9'.",
    link: "https://www.youtube.com/watch?v=o_T5kk1kjJM"
  },
  cantor7: {
    name: "Bob Marley",
    info: "Lenda do reggae, conhecido por suas letras que abordavam temas como paz, amor, justiça social e a cultura rastafári. Sua música mais famosa é 'One Love'.",
    link: "https://www.youtube.com/watch?v=vdB-8eLEW8g"
  },
  cantor8: {
    name: "Eminem",
    info: "Rapper e compositor americano, conhecido por suas rimas rápidas e letras controversas. Sua música mais famosa é 'Lose Yourself'.",
    link: "https://www.youtube.com/watch?v=xFYQQPAOz7Y"
  },
  cantor9: {
    name: "Frank Sinatra",
    info: "Cantor e ator americano, conhecido como a 'Voz' e um dos maiores ícones da música popular. Sua música mais famosa é 'New York, New York'.",
    link: "https://www.youtube.com/watch?v=le1QF3uoQNg"
  },
  cantor10: {
    name: "Prince",
    info: "Músico, compositor e produtor americano, conhecido por sua versatilidade musical e performances excêntricas. Sua música mais famosa é 'Purple Rain'.",
    link: "https://www.youtube.com/watch?v=347vCib_lMs"
  }
};


function showInfo(singer) {
  const card = document.getElementById('infoCard');
  const nameElement = document.getElementById('singerName');
  const infoElement = document.getElementById('singerInfo');
  const linkElement = document.getElementById('singerLink');

  nameElement.textContent = singerInfo[singer].name;
  infoElement.textContent = singerInfo[singer].info;
  linkElement.href = singerInfo[singer].link;

  card.style.display = 'block';
}


function closeInfo() {
  document.getElementById('infoCard').style.display = 'none';
}
function selectIcon(element) {
  // Remove a classe 'selected' de qualquer outro ícone
  document.querySelectorAll('.singer').forEach(singer => {
    singer.classList.remove('selected');
  });

  // Adiciona a classe 'selected' ao ícone clicado
  element.classList.add('selected');
}
class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}



const phrases = [
  'Explorador,',
  'logo você vai descobrir',
  'que a verdadeira magia',
  'está em conhecer novos sons,',
  'descobrir vozes únicas,',
  'e se perder nas melodias',
  'que marcam a alma.'

]

const el = document.querySelector('.text')
const fx = new TextScramble(el)

let counter = 0
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 800)
  })
  counter = (counter + 1) % phrases.length
}

next()

function openWhatsApp() {
  // Abre um chat do WhatsApp com o número fornecido
  window.open('https://wa.me/númerodogruposobremúsicas', '_blank');
}


