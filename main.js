const technologies = [
  { name: "JavaScript", icon: "img/language/javascript.svg" },
  { name: "HTML", icon: "img/language/html.svg" },
  { name: "CSS", icon: "img/language/css.svg" },
  { name: "TypeScript", icon: "img/language/typescript.svg" },
  { name: "React", icon: "img/language/react.svg" },
  { name: "Sass", icon: "img/language/sass.svg" },
  { name: "Figma", icon: "img/language/figma.svg" },
  { name: "Git", icon: "img/language/git.svg" },
  { name: "Python", icon: "img/language/python.svg" },
];

const projects = [
  {
    title: "Harmonia Studio",
    category: "websites",
    image: "img/card/harmonia-studio.png",
    description: "Aplicação visual com foco em interface e navegação fluida.",
    stack: ["JavaScript"],
    live: "https://letxt.github.io/harmonia-studio/",
    code: "https://github.com/LeTXT/harmonia-studio",
  },
  {
    title: "don Calo Barber",
    category: "websites",
    image: "img/card/donCarloBarber.png",
    description: "Aplicação visual com foco em interface e navegação fluida.",
    stack: ["JavaScript"],
    live: "https://letxt.github.io/Don-Carlo-Barber/",
    code: "https://github.com/LeTXT/Don-Carlo-Barber",
  },
  {
    title: "Brasa Burger",
    category: "websites",
    image: "img/card/brasa-burger.png",
    description: "Aplicação visual com foco em interface e navegação fluida.",
    stack: ["JavaScript"],
    live: "https://letxt.github.io/brasa-burguer/",
    code: "https://github.com/LeTXT/brasa-burguer",
  },
   {
    title: "Forge Training",
    category: "websites",
    image: "img/card/forge-training.png",
    description: "Aplicação visual com foco em interface e navegação fluida.",
    stack: ["JavaScript"],
    live: "https://letxt.github.io/forge-training/",
    code: "https://github.com/LeTXT/forge-training",
  },
   {
    title: "FocusApp",
    category: "websites",
    image: "img/card/focusapp.png",
    description: "Aplicação visual com foco em interface e navegação fluida.",
    stack: ["JavaScript"],
    live: "https://letxt.github.io/FocusApp/",
    code: "https://github.com/LeTXT/FocusApp",
  },

  {
    title: "Nimbus",
    category: "outros",
    image: "img/card/nimbus.png",
    description: "Aplicação visual com foco em interface e navegação fluida.",
    stack: ["React"],
    live: "https://letxt.github.io/Nimbus/",
    code: "https://github.com/LeTXT/Nimbus",
  },
  {
    title: "Calculadora",
    category: "outros",
    image: "img/card/calculator.png",
    description: "Estudo de UI com calculadora publicada em mais de uma abordagem.",
    stack: ["JavaScript", "React"],
    live: "https://letxt.github.io/calcNeoBrutalism/",
    code: "https://github.com/LeTXT/calcNeoBrutalism",
  },
  {
    title: "Jogo da Velha",
    category: "jogos",
    image: "img/card/ticTacToe.png",
    description: "Projeto clássico em JavaScript com foco em interação e lógica.",
    stack: ["JavaScript"],
    live: "https://letxt.github.io/ticTacToeJS/",
    code: "https://github.com/LeTXT/ticTacToeJS",
  },
  {
    title: "Tela de Login",
    category: "interfaces",
    image: "img/card/login.png",
    description: "Componente de autenticação com layout limpo e responsivo.",
    stack: ["React"],
    live: "https://letxt.github.io/login-form-react/",
    code: "https://github.com/LeTXT/login-form-react",
  },
];

const projectCategories = [
  { id: "todos", label: "Todos" },
  { id: "websites", label: "Websites" },
  { id: "jogos", label: "Jogos" },
  { id: "interfaces", label: "Interfaces" },
  {id: "outros", label: "Outros"},
];

const contacts = [
  {
    title: "LinkedIn",
    icon: "img/contacts/linkedin.svg",
    href: "https://www.linkedin.com/in/leandrogdo/",
    label: "Conectar no LinkedIn",
  },
  {
    title: "Email",
    icon: "img/contacts/gmail.svg",
    href: "mailto:leandrog.oliveiracontact@gmail.com",
    label: "Enviar email",
  },
  {
    title: "GitHub",
    icon: "img/contacts/github.svg",
    href: "https://github.com/LeTXT",
    label: "Ver GitHub",
  },
];

const typedPhrases = [
 "Explore meus projetos e entenda como transformo ideias em interfaces reais.",
  "Interfaces modernas, com foco em clareza, performance e manutenção.",
  "Soluções pensadas para funcionar bem hoje e evoluir com o seu projeto.",
];

const coffeePhrases = [
  "404",
  "undefined",
  "NaN",
  "criatividade",
  "deploy",
];

const typedText = document.querySelector("#typed-text");
const coffeeError = document.querySelector("#coffee-error");
const tickerTrack = document.querySelector("#ticker-track");
const projectFilters = document.querySelector("#project-filters");
const projectsGrid = document.querySelector("#projects-grid");
const contactGrid = document.querySelector("#contact-grid");
const clockBrt = document.querySelector("#clock-brt");
const clockLocal = document.querySelector("#clock-local");
let activeProjectCategory = "todos";

function renderTicker() {
  const repeatedItems = [...technologies, ...technologies, ...technologies];

  tickerTrack.innerHTML = repeatedItems
    .map(
      (tech) => `
        <div class="ticker-item">
          <img src="${tech.icon}" alt="" aria-hidden="true" />
          <span>${tech.name}</span>
        </div>
      `
    )
    .join("");
}

function renderProjectFilters() {
  projectFilters.innerHTML = projectCategories
    .map(
      (category) => `
        <button
          class="project-filter${category.id === activeProjectCategory ? " is-active" : ""}"
          type="button"
          data-category="${category.id}"
        >
          ${category.label}
        </button>
      `
    )
    .join("");

  projectFilters.querySelectorAll(".project-filter").forEach((button) => {
    button.addEventListener("click", () => {
      activeProjectCategory = button.dataset.category;
      renderProjectFilters();
      renderProjects();
    });
  });
}

function renderProjects() {
  const filteredProjects =
    activeProjectCategory === "todos"
      ? projects
      : projects.filter((project) => project.category === activeProjectCategory);

  projectsGrid.innerHTML = filteredProjects
    .map(
      (project) => `
        <article class="project-card">
          <div class="project-image-wrap">
            <img src="${project.image}" alt="Preview do projeto ${project.title}" class="project-image" />
          </div>
          <div class="project-content">
            <div class="project-topline">
              <h3>${project.title}</h3>
              <p>${project.stack.join(" / ")}</p>
            </div>
            <p class="project-description">${project.description}</p>
            <div class="project-links">
              <a href="${project.live}" target="_blank" rel="noreferrer">Abrir projeto</a>
              <a href="${project.code}" target="_blank" rel="noreferrer">Código</a>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderContacts() {
  contactGrid.innerHTML = contacts
    .map((contact) => {
      const isExternal = contact.href.startsWith("http");
      const externalAttrs = isExternal ? ' target="_blank" rel="noreferrer"' : "";

      return `
        <a class="contact-card" href="${contact.href}"${externalAttrs} aria-label="${contact.label}">
          <img src="${contact.icon}" alt="" aria-hidden="true" />
          <span>${contact.title}</span>
        </a>
      `;
    })
    .join("");
}

function startTypewriter() {
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const step = () => {
    const currentPhrase = typedPhrases[phraseIndex];
    typedText.textContent = currentPhrase.slice(0, charIndex);

    if (!deleting && charIndex < currentPhrase.length) {
      charIndex += 1;
      setTimeout(step, 35);
      return;
    }

    if (!deleting && charIndex === currentPhrase.length) {
      deleting = true;
      setTimeout(step, 1800);
      return;
    }

    if (deleting && charIndex > 0) {
      charIndex -= 1;
      setTimeout(step, 18);
      return;
    }

    deleting = false;
    phraseIndex = (phraseIndex + 1) % typedPhrases.length;
    setTimeout(step, 350);
  };

  step();
}

function startCoffeeLoop() {
  let index = 0;

  const update = () => {
    const prefix = "Café, código e ";
    const tail = coffeePhrases[index];
    const full = `${prefix}${tail}`;
    coffeeError.textContent = full;
    index = (index + 1) % coffeePhrases.length;
  };

  update();
  setInterval(update, 1400);
}

function updateClocks() {
  const now = new Date();

  clockLocal.textContent = `Local ${now.toLocaleTimeString("pt-BR")}`;
  clockBrt.textContent = `BRT ${now.toLocaleTimeString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  })}`;
}

renderTicker();
renderProjectFilters();
renderProjects();
renderContacts();
startTypewriter();
startCoffeeLoop();
updateClocks();
setInterval(updateClocks, 1000);
