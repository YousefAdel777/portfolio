import {
  mobile,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  chatai,
  worldranks,
  translatedio,
  spacetourism,
  justweather
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
];

const projects = [
  {
    name: "Just Weather",
    description: "Weather forecast web app that allows users to search for citiest by name and view weather information for the selected location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "swiperjs",
        color: "green-text-gradient",
      }
    ],
    image: justweather,
    source_code_link: "https://github.com/YousefAdel777/just-weather",
    live_url: "https://justweather-app.netlify.app/",
  },
  {
    name: "Translated.io",
    description:
      "Web app that allows users to translate words and sentences from a language to another, and listen to translated text using Web Speech API.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: translatedio,
    source_code_link: "https://github.com/YousefAdel777/Translate-app",
    live_url: "https://translatedio.netlify.app/",
  },
  {
    name: "Chat AI",
    description:
      "Web application that enables users to chat with a Generative-AI model (Google Gemini API) and save their chats to firestore.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: chatai,
    source_code_link: "https://github.com/YousefAdel777/Chat-AI",
    live_url: "https://chataigemini.netlify.app/",
  },
  {
    name: "World Ranks",
    description:
      "A simple countries data web application that allows users to search for countries and filter results based on region, population, etc.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: worldranks,
    source_code_link: "https://github.com/YousefAdel777/World-ranks",
    live_url: "https://worldranksapp.netlify.app"
  },
  {
    name: "Space Tourism",
    description:
      "A multi-page website for a space travel company with smooth animations using framer-motion and react-router.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "framer",
        color: "green-text-gradient",
      },
    ],
    image: spacetourism,
    source_code_link: "https://github.com/YousefAdel777/Space-tourism-website",
    live_url: "https://space-tourism-2.netlify.app"
  },
];

export { services, technologies, projects };
