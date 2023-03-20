import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Abhishek Alekar | Full Stack Developer | PHPAbhishek', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is ',
  name: 'Abhishek Alekar',
  subtitle: "I'm Full Stack Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile-1.jpg',
  paragraphOne: 'Knowledgeable of back end and front end development requirements.',
  paragraphTwo: 'Able to handle any part of the process with Well-qualified Full Stack Developer familiar with a wide range of programming utilities and languages.',
  paragraphThree: 'Collaborative team player with excellent technical abilities offering 7 years of related experience.',
  resume: 'https://gitconnected.com/abhishekalekar/resume', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project-faq.jpg',
    title: 'FAQ-Accordion-Card',
    info: 'Challenge by FrontEnd Mentor',
    info2: 'coded by Abhishek Alekar',
    url: 'https://abhishekalekar.github.io/FAQ-Accordion-Card/',
    repo: 'https://github.com/abhishekalekar/FAQ-Accordion-Card', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-bitcoin.jpg',
    title: 'Bitcoin Price Index ',
    info: 'Bitcoin Price index build using HTML | CSS',
    info2: '',
    url: 'https://abhishekalekar.github.io/BitCoinPriceIndex',
    repo: 'https://github.com/abhishekalekar/BitCoinPriceIndex', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'react-portfolio.jpg',
    title: 'React based Portfolio',
    info: 'Porfolio developed using gitconnected API and React as FrontEnd',
    info2: '',
    url: 'https://abhishekalekar.github.io/create-react-app-portfolio',
    repo: 'https://github.com/abhishekalekar/create-react-app-portfolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'abhishekalekar[at]gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/abhishekalekar',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/abhishekalekar',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/abhishekalekar',
    },
    {
      id:nanoid(),
      name:'mastodom',
      url:'https://techhub.social/@abhishekalekar',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
