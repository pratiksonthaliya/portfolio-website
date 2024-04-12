import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including JavaScript, React, Next.js, TypeScript, Node.js, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy travelling, reading books, and exploring new technologies.`;
// export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Full Stack Developer",
    company: "Fastenal India ",
    description: `I and my team are developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with PostgreSQL databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Node.js", "PostgreSQL"],
  },
  // {
  //   year: "2023 - Present",
  //   role: "Senior Full Stack Developer",
  //   company: "Google Inc.",
  //   description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
  //   technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  // },
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "SECE Leaderboard",
    image: project1,
    link: "https://sece-leaderboard-nitjsr.netlify.app/",
    code: "https://github.com/pratiksonthaliya/SECE-Leaderboard",
    description:
      "A platform developed to eliminate the repetitive manual task of calculating ranks for juniors in every contest.  It fetches contestants' performance data, assigns scores, and maintains a live scoreboard. Admins can manage contests and contestants with ease. It widely used by college students.",
    technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Anime Database",
    image: project2,
    link: "https://anidatabase.netlify.app/",
    code: "https://github.com/pratiksonthaliya/AniDB",
    description:
      "AnimeDB is an Anime Database App that utilizes the Jikan API to fetch anime details, offers an inbuilt YouTube interface for trailers, and presents a comprehensive grid of popular, aired, and upcoming anime. Users can explore short descriptions and character profiles for each anime.",
    technologies: ["HTML", "StyledComponents", "JavaScript", "React"],
  },
  // {
  //   title: "Portfolio Website",
  //   image: project3,
  //   link: "https://sece-leaderboard-nitjsr.netlify.app/",
  //   code: "https://github.com/pratiksonthaliya/SECE-Leaderboard",
  //   description:
  //     "A personal portfolio website showcasing projects, skills, and contact information.",
  //   technologies: ["HTML", "TailwindCSS", "JavaScript", "React"],
  // },
  {
    title: "Compiler Design:  my-programming-language",
    image: project4,
    link: "https://www.npmjs.com/package/my-programming-language",
    code: "https://github.com/pratiksonthaliya/my-programming-language",
    description:
      "my-programming-language is a project-based programming language implemented in JavaScript. It features a lexer, parser, and code generator that run internally. It includes if, else, and while loop constructs for control flow, as well as support for variable declaration, assignment, and comparison operations.",
    technologies: ["JavaScript", "Node.js", "npm"],
  },
  {
    title: "Tic Tac Toe",
    image: project3,
    link: "https://tic-tac-toe-pratik.vercel.app/",
    code: "https://github.com/pratiksonthaliya/tic-tac-toe-ts",
    description:
      "Tic Tac Toe is a fun and interactive game built using React. The game features a responsive board where players can take turns to place their 'X' or 'O' marks. With sound effects for clicks and winning moments, the game offers an engaging experience.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
  },
];

export const CONTACT = {
  address: "Giridih, Jharkhand, India ",
  phoneNo: "+91 748-836-2319 ",
  email: "sonthaliyap@gmail.com",
};
