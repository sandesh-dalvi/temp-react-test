import tour1 from "./assets/images/tour-1.jpeg";
import tour2 from "./assets/images/tour-2.jpeg";
import tour3 from "./assets/images/tour-3.jpeg";
import tour4 from "./assets/images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "Home" },
  { id: 2, href: "#about", text: "About" },
  { id: 3, href: "#services", text: "Services" },
  { id: 3, href: "#tours", text: "Tours" },
];
export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    title: "saving money",
    icon: "fas fa-wallet fa-fw",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    title: "endless hiking",
    icon: "fas fa-tree fa-fw",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    title: "amazing comfort",
    icon: "fas fa-socks fa-fw",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "china",
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: "october 1th, 2020",
    title: "best of java",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "indonesia",
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "hong kong",
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "kenya",
    duration: 20,
    cost: 3300,
  },
];
