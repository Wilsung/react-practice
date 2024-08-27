import githubBattle from "./assets/gh-battle.jpg";
import hackerNews from "./assets/hackernews.jpg";
import foodApp from "./assets/foodApp.jpg";

export default [
  {
    name: "Food Ordering Demo",
    src: foodApp,
    alt: "Food ordering application.",
    description:
      "A Full-Stack food ordering application connected with Firebase's backend to fetch images and store customer order information.",
    technologies:
      "Technologies: Fullstack application, Firebase Backend Database. HTML, CSS, JavaScript, React, React Hooks, React Router. Deployed with Netlify.",
    stack: [
      "Fullstack application",
      "Firebase Backend Database",
      "JavaScript",
      "React",
      "TailwindCSS",
      "Deployed with Netlify.",
    ],
    link: "https://sunny-pithivier-cbcbaa.netlify.app/",
  },
  {
    name: "GitHub Battle",
    src: githubBattle,
    alt: "Battle your friends on GitHub",
    description:
      "Enter two GitHub users to battle each other. Results are based on their stars and followers. Also, finds/sorts popular repositories for several coding languages in GitHub.",
    stack: [
      "JavaScript",
      "React",
      "React Router",
      "Github API",
      "Deployed with Netlify.",
    ],
    link: "https://modest-lichterman-dbae69.netlify.app/",
  },
  //   {
  //     name: "Smartbrain",
  //     //src: require("../assets/smartbrain.jpg"),
  //     alt: "Find faces through an http image search.",
  //     description:
  //       "Detects the faces of an image provided via http. Created a login feature to store ranking of a user based on the amount of times they used the application.",
  //     technologies:
  //       "Technologies: HTML, CSS, JavaScript, React, React Router, Clarifai's API. Back-end utilizes Node.js, Express framework, and PostgreSQL to handle and store user data. Deployed with Netlify.",
  //     link: "https://relaxed-northcutt-5526a8.netlify.app/",
  //   },
  {
    name: "HackerNews Clone",
    src: hackerNews,
    alt: "Clone of the HackerNews website.",
    description:
      "Clone of the HackerNews, the social news website focused on different technologies and entrepreneurship.",
    stack: [
      "JavaScript",
      "React",
      "React Router",
      "HackerNews API",
      "Deployed with Netlify.",
    ],
    link: "https://flamboyant-knuth-92e3d3.netlify.app/",
  },
];
