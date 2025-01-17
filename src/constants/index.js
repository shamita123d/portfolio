import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `As a fresh graduate and an enthusiastic full stack developer, 
I have a talent for building durable and scalable web applications.
I have developed strong skills in front-end technologies such as React and Next.js, 
as well as back-end technologies including Node.js,Springboot,MySQL. 
My objective is to utilize my knowledge to develop creative solutions that enhance business growth and provide outstanding user experiences.`;

export const ABOUT_TEXT = `I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Gas Lekage Detection System",
    image: project1,
    description:
      "A fully functional System with features like  with features such as alert notification,emits the dangerous gas out.",
    technologies: ["Arduino Software", "Microcontroller"],
  },
  {
    title: "Weather Forcasting Application",
    image: project2,
    description:
      "An application for forcasting weather, with features such as gives current weather forcast,weather forcast by days and hours,also provide notification in heavy condtion.",
    technologies: ["html", "CSS","Javascript","Springboot","Mysql"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwindcss","Vite"],
  },
  {
    title: "TODO List",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["React" ,"Vite","Tailwind CSS","MySQL"],
  },
];

export const CONTACT = {
  address: "Nagpur,Maharasgtra-440035 ",
  phoneNo: "+91 8421965338 ",
  email: "shamitadeogade.com",
};
