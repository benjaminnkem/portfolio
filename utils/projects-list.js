export const projects = [
  {
    name: "BStore",
    description: `BStore is an online store, where users find products and services, It comes with an administrator's dashboard for creating, deleting, updating posts basically it can perform CRUD operations.
    Regular users can also sign up as a seller and sell products to customers.

    It also comes with a checkout functionality using stripe which makes it easy to pay for a purchase online.
    `,
    images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((img) => `/images/projects/bstore/${img}.png`),
    alt_attr: "BStore Illustration",
    id: "bstore",
    techs: ["NextJs", "MongoDB", "NodeJs", "TailwindCSS"],
    github_repo: "https://github.com/benjaminnkem/portfolio",
    live_: {
      url: "https://bnstore.vercel.app/",
      name: "BStore",
    },
  },
  {
    name: "Ceelyrics",
    description: `Ceelyrics is a fast-growing lyrics website, It's personally managed be me and is constantly being updated.
    
    Ceelyrics was inspired by Azlyrics.com, because of it's simplicity and speed, Ceelyrics was then built to be better, faster and have a better User Interface and User Experience (UI/UX).
    `,
    images: [1, 2, 3, 4].map((num) => `/images/projects/ceelyrics/cee${num}.png`),
    alt_attr: "Ceelyrics Illustration",
    id: "ceelyrics",
    techs: ["Nodejs", "ExpressJs", "MySQL", "TailwindCSS"],
    github_repo: "",
    live_: {
      url: "https://ceelyrics.com/",
      name: "Ceelyrics",
    },
  },

  {
    name: "BSolor",
    description: `BSolor is a website built using the basic principles of THREE.js`,
    images: [1, 2, 3].map((num) => `/images/projects/bsolar/${num}.png`),
    alt_attr: "BSolor Illustration",
    id: "bsolar",
    techs: ["Vite", "THREE.js"],
    github_repo: "https://github.com/benjaminnkem/solar-journey",
    live_: {
      url: "https://solar-journey.vercel.app",
      name: "BSolar Journey",
    },
  },

  {
    name: "KaygreyKennel",
    description: `KaygreyKennel is a pet store (mostly dogs), KaygreyKennel was inspired by my love for dogs and pets in general. It also comes with an admin interface for admins to perform CRUD operations on posts data.
      
    It also has search & sort functionality, which makes users to search for things easily, improving User Experience. 
      `,
    images: [1, 2, 3, 4, 5, 6]
      .map((num) => `/images/projects/kaygrey/kaygrey${num}.png`)
      .concat(["/images/projects/kaygrey/kaygrey.png"]),
    alt_attr: "Kaygrey Illustration",
    id: "kaygrey",
    techs: ["NodeJs", "ExpressJs", "MySQL", "TailwindCSS"],
    github_repo: "",
    live_: {},
  },

  {
    name: "Typimon",
    description: `Typimon is a basic AI implementation for typing, How it works is a random sentence or phrase gets generated on starting, the user gets a typing field where his/her typing goes. While typimon starts typing at a speed which is easily adjustable by the users.
    
    It also comes with a 'correct word' indicator that tells the user if they've made a mistake while typing.`,
    images: [
      "/images/projects/typimon/typimonreal.png",
      "/images/projects/typimon/typimon2.png",
      "/images/projects/typimon/typimon3.png",
    ],
    alt_attr: "Typimon Illustration",
    id: "typimon",
    techs: ["HTML", "CSS", "Vanilla Javascript", "Fetch API"],
    github_repo: "https://github.com/benjaminnkem/typimon",
    live_: {
      url: "https://tranquil-bombolone-c95188.netlify.app/",
      name: "Typmimon",
    },
  },
  {
    name: "BQuiz",
    description: `BQuiz is an online store, where users find products and services, It comes with an administrator's dashboard for creating, deleting, updating posts basically it can perform CRUD operations.
    Regular users can also sign up as a seller and sell products to customers.

    It also comes with a checkout functionality using stripe which makes it easy to pay for a purchase online.
    `,
    images: [1, 2, 3, 4, 5, 6].map((img) => `/images/projects/bquiz/bquiz${img}.png`),
    alt_attr: "BStore Illustration",
    id: "bstore",
    techs: ["NextJs", "MongoDB", "NodeJs", "TailwindCSS"],
    github_repo: "https://github.com/benjaminnkem/bquiz",
    live_: {
      url: "https://bquiz.vercel.app/",
      name: "BQuiz",
    },
  },
  {
    name: "BenCalc",
    description: `BenCalc is a well functioning calculator built in TypeScript, HTML and CSS`,
    images: [
      "/images/projects/bjncalc/bjncalc.png",
      "/images/projects/bjncalc/ben_calc1.png",
      "/images/projects/bjncalc/ben_calc3.png",
      "/images/projects/bjncalc/ben_calc4.png",
    ],
    alt_attr: "BenCalc Illustration",
    id: "bencalc",
    techs: ["HTML", "CSS", "Typescript"],
    github_repo: "https://github.com/benjaminnkem/bencalc",
    live_: {
      url: "https://adorable-biscuit-b109dd.netlify.app/",
      name: "BenCalc",
    },
  },
  {
    name: "Bjn Sitemap Generator",
    description: `Bjn Sitemap Generator is a basic web scrapping tool.
    
    In this scenario I configured it for sitemap generation for a webpage, but it can expanded for more complex web crawling processes.
    It works by letting a user paste or type valid URL into the 'url input' field, and then it crawls all links on the page and makes a sitemap out of it. Other external links on the page gets filtered out.
    `,
    images: [1, 2, 3].map((num) => `/images/projects/bjnapi/bjncrawl${num}.png`),
    alt_attr: "Bjn Sitemap Generator Illustration",
    id: "bjnsitemap",
    techs: ["Nodejs", "ExpressJs", "Cheerio", "TailwindCSS"],
    github_repo: "https://github.com/benjaminnkem/bjn-web-scrapper",
    live_: {
      url: "https://cee-web-scrapper.onrender.com/",
      name: "Bjn Web Scrapper",
    },
  },

  {
    name: "YouNote",
    description: `YouNote is a robust and user-friendly todo tracking web application developed using ReactJs, a popular JavaScript library for building user interfaces. 
      
      With its intuitive interface and efficient design, YouNote allows users to effortlessly manage and organize their tasks, providing them with a seamless and enjoyable productivity experience.`,
    images: ["/images/projects/younote/younote.png", "/images/projects/younote/younote2.png"],
    alt_attr: "YouNote Illustration",
    id: "younote",
    techs: ["ReactJs", "Vanilla CSS"],
    github_repo: "",
    live_: {},
  },
];
