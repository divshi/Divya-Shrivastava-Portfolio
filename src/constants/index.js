import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg";
import project8 from "../assets/projects/project-8.jpeg";


export const HERO_CONTENT = `I am Divya Shrivastava, a dedicated Computer Science and Engineering student with a passion for creating innovative and impactful technology solutions. My experience spans web development, game development, and machine learning, utilizing skills in HTML, CSS, JavaScript, ReactJS, NodeJS, Java, C++, Python, MySQL, and C#. My goal is to leverage my diverse skill set to build engaging and efficient applications, pushing the boundaries of technology to deliver exceptional user experiences.`;

export const ABOUT_TEXT = `As a final-year B.Tech student in Computer Science and Engineering at Lovely Professional University, I am deeply invested in using technology to make a positive impact. My academic journey includes a semester exchange at the University of Skövde, Sweden, focusing on AI and cybersecurity, and my current internship at Walking Tree Technologies on a machine-learning project. I have developed a strong foundation in both front-end and back-end technologies, and have successfully completed projects ranging from a personalized gift website to immersive 3D games. I am enthusiastic about continuous learning and thrive in collaborative environments where I can solve complex problems and drive innovation. Beyond my technical pursuits, I enjoy exploring new technologies and contributing to projects that make a difference.`;

export const EXPERIENCES = [
  {
    year: "June 2024 - Present",
    role: "Software Development Intern",
    company: "Walking Tree Technologies",
    description: `Collaborating on a machine learning project focused on data analysis to derive actionable insights. Developing and implementing algorithms to enhance data processing and analysis efficiency. Contributing to code reviews, debugging, and optimizing code performance. Engaging with cross-functional teams to align technical solutions with business goals. Additionally, learning UX prototyping as part of the internship.`,
    technologies: ["Python", "Machine Learning", "Data Analysis", "Algorithms", "UX Prototyping"],
  },
  {
    year: "June 2023 - July 2023",
    role: "Summer Training in Frontend Web Development",
    company: "Board Infinity",
    description: `Participated in an intensive training program specializing in frontend web development. Mastered practical skills in HTML, CSS, and JavaScript. Explored various JavaScript frameworks and libraries, broadening understanding of contemporary web development practices.`,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    year: "January 2023 - June 2023",
    role: "Semester Abroad Program",
    company: "University of Skövde, Sweden",
    description: `Engaged in immersive experiences during a transformative program. Participated in an industry visit to the Swedish company named Kollmorgen, gaining insights into their operations and practices. Learned JavaScript programming using Python and PowerShell. Actively engaged in international initiatives, refining cross-cultural adaptability skills while gaining diverse perspectives.`,
    technologies: ["JavaScript", "Python", "PowerShell"],
  },
];

export const PROJECTS = [
  {
    title: "Dashboard Creator",
    image: project8,
    description:
      "Web application for generating dashboard of uploaded data using AI and providing interface for chatting with data and creating it's interactive graphs",
    technologies: ["React.JS","Python"],
  },
  {
    title: "Snake Game",
    image: project1,
    description:
      "A classic snake game developed using Java, featuring basic gameplay mechanics where the player controls a snake to collect food and grow longer without hitting the walls or itself.",
    technologies: ["Java"],
  },
  {
    title: "3D Fruit Ninja Game",
    image: project2,
    description:
      "A 3D game inspired by the popular Fruit Ninja, developed using Unity. Players slice fruits in a dynamic 3D environment, enhancing reaction speed and hand-eye coordination.",
    technologies: ["Unity", "C#"],
  },
  {
    title: "Personalized Gift Ordering Website (CREATIVE)",
    image: project3,
    description:
      "A web application that allows users to order personalized gifts, featuring a modern UI and seamless user experience. The application is developed with full-stack technologies.",
    technologies: ["HTML", "CSS", "JavaScript", "ReactJS", "MongoDB", "Express", "NodeJS", "Bootstrap"],
  },
  {
    title: "3D Super Mario Game",
    image: project4,
    description:
      "A 3D game based on the iconic Super Mario, developed using Unity. It offers classic platformer gameplay with modern 3D graphics and physics.",
    technologies: ["Unity", "C#"],
  },
  {
    title: "Music Website",
    image: project5,
    description:
      "A responsive web application for streaming and exploring music, featuring a user-friendly interface and dynamic content display.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    title: "Hotstar Clone",
    image: project6,
    description:
      "A clone of the popular streaming platform Hotstar, featuring a similar UI/UX, developed to understand and implement web development best practices.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Ludo Game",
    image: project7,
    description:
      "A digital version of the classic board game Ludo, developed in Java. The game includes multiplayer support and basic AI for single-player mode.",
    technologies: ["Java"],
  },
];


export const CONTACT = {
  address: "Greater Noida West",
  phoneNo: "+91 9625995511",
  email: "divya.sh.se@gmail.com",
};
