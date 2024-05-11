import araya from "../../assets/araya.png";
import rajBlog from "../../assets/blog.png";
import tmdb from "../../assets/tmdb.png";

const projectData = [
  {
    id: 0,
    img: araya,
    title: "Araya Arts | E-commerce Store",
    description:
      "Araya Arts is an e-commerce store created using Next Js (frontend), Express JS (backend), and MongoDB (database).",
    link: "https://arayaarts.netlify.app/store",
  },
  {
    id: 1,
    img: rajBlog,
    title: "Raj Blog | Blog Site",
    description:
      "Raj Blog is created using Next js and WordPress (as a headless CMS) where i post articles related to front end technologies and programming in general",
    link: "https://rajthapablog.netlify.app/",
  },
  {
    id: 2,
    img: tmdb,
    title: "TGMR | Movie Review Site",
    description:
      "TGMR is a movie review site built using React JS and Tailwind CSS. This project uses the TMDB API to fetch the movies and TV show data.",
    link: "https://tgmr.netlify.app/",
  },
];

export default projectData;
