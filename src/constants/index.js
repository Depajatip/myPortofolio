import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  bootstrap,
  php,
  laravel,
  codeigniter,
  python,
  mysql,
  postgresql,
  wordpress,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  sd,
  smp,
  pkl,
  smk,
  tandatanya,
  carrent,
  jobit,
  tripguide,
  threejs,
  penjualan1,
  penjualan2,
  penjualan3,
  penjualan4,
  penjualan5,
  penjualan6,
  penjualan7,
  moneytracking1, 
  moneytracking2,
  moneytracking3,
  moneytracking4,
  moneytracking5,
  moneytracking6,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// Services / Skills (icons reuse existing assets where available)
const services = [
  { title: "CSS", icon: css, level: 92 },
  { title: "JavaScript", icon: javascript, level: 90 },
  { title: "Bootstrap", icon: bootstrap, level: 80 },
  { title: "Tailwind", icon: tailwind, level: 78 },
  { title: "PHP", icon: php, level: 84 },
  { title: "Laravel", icon: laravel, level: 86 },
  { title: "CodeIgniter", icon: codeigniter, level: 70 },
  { title: "Python", icon: python, level: 72 },
  { title: "MySQL", icon: mysql, level: 80 },
  { title: "PostgreSQL", icon: postgresql, level: 76 },
  { title: "Git", icon: git, level: 88 },
  { title: "WordPress", icon: wordpress, level: 82 },
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "SDN Mangunan",
    company_name: "Mangunan, Dlingo, Bantul, Yogyakarta",
    icon: sd,
    iconBg: "#E6DEDD",
    date: "March 2014 - Jan 2020",
    points: [
      // "Developing and maintaining web applications using React.js and other related technologies.",
    ],
  },
  {
    title: "SMP Muhamadiyah Imogiri",
    company_name: "Jl. Makam Raja No.18, Imogiri, Bantul, Yogyakarta",
    icon: smp,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Feb 2023",
    points: [
      // "Developing and maintaining web applications using React.js and other related technologies.",
    ],
  },
  {
    title: "PKL CV. Karya Hidup Sentosa",
    company_name: "Jl. Magelang No.144, Karangwaru, Kec. Tegalrejo, Yogyakarta,",
    icon: pkl,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - April 2025",
    points: [
      "Quality Enginnering intern working on testing and ensuring the quality of web applications.",
    ],
  },
    {
    title: "SMK Muhammadiyah 1 Bantul",
    company_name: "Jl. Parangtritis Jl. Manding Kidul No.Km. 12, Trirenggo, Bantul, Yogyakarta",
    icon: smk,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      // "Developing and maintaining web applications using React.js and other related technologies.",
    ],
  },
      {
    title: "???",
    company_name: "i litraly have no cluee what im doing with ny life",
    icon: tandatanya,
    iconBg: "#E6DEDD",
    date: "Jan 2026 - Future",
    points: [
      "i think onee of my biggest fears is never acchieving the life i so desperately crave for my future self",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "The world is your oyster. It's up to you to find the pearls",
    name: "Chris Gardner",
    designation: "The Pursuit of Happyness",
    company: "",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "You can't be good with somoeone else until you're good with yourself.",
    name: "Alfredo Narciso",
    designation: "The Summer I Turned Pretty",
    company: "",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "At some point you gotta decide for yourself who you gonna be. Can't let nobody make that decision for you.",
    name: "Juan",
    designation: "Moonlight",
    company: "",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Point Of Sales",
    description:
      "Point of Sale (POS) system using Laravel and Bootstrap 4, enabling real-time cashier workflows: category-based product browsing, dynamic cart management (add/remove/adjust items), instant stock updates in the UI, and visual stock validation (buttons auto-disable when out of stock). The system features role-based authorization — admins can manage products, categories, and user accounts (including creating cashier accounts), while cashiers are restricted to order processing and transactions — ensuring security, operational efficiency, and clear role separation.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    images: [penjualan1,penjualan2,penjualan1,penjualan2,penjualan3,penjualan4,penjualan5,penjualan6,penjualan7],
    source_code_link: "https://github.com/Depajatip/ukk5",
  },
  {
    name: "Money Tracking",
    description:
      "Money Tracking web application built using Laravel and Bootstrap — enabling users to record and monitor their financial activities in real time: category-based transaction logging, automatic sub-category selection, detailed payment method tracking, and filtered views for income and expenses. The system provides complete daily and historical summaries with date-based filtering, visual balance updates after each transaction, and clear separation between income and expense categories — ensuring accurate financial reporting, user convenience, and better personal budget control.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    images: [moneytracking1,moneytracking2,moneytracking3,moneytracking4,moneytracking5,moneytracking6],
    source_code_link: "https://github.com/Depajatip/MoneyTracking",
  },
  {
    name: "ZyrexBot",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
    ],
    images: [tripguide,jobit],
    source_code_link: "https://github.com/Depajatip/ZyrexBot-App",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
