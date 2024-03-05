import { um, ea, codermate } from "../assets/images";
import {
    angular,
    car,
    contact,
    css,
    docker,
    estate,
    express,
    git,
    github,
    html,
    java,
    javascript,
    kotlin,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Frontend",
    },
    {
        imageUrl: angular,
        name: "Angular",
        type: "Front End",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Cloud",
    },
    {
        imageUrl: kotlin,
        name: "Kotlin",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    
];

export const experiences = [
    {
        title: "React Native Engineer",
        company_name: "CoderMate",
        icon: codermate,
        iconBg: "#ffffff",
        iconFooter: "#3f3de6",
        date: "Nov 2023 - Present 2023",
        points: [
            "Developed and maintained scalable app development using React Native, JavaScript, and TypeScript.",
            "Spearheaded the integration of OpenAI services into applications.",
            "Utilized Native Base for streamlined UI development, along with MongoDB and Redux.",
            "Designed and implemented interactive information visualization enhancig users analytics.",
        ],
    },
    {
        title: "Full Stack Software Engineer",
        company_name: "Electronic Arts - EA",
        icon: ea,
        iconBg: "#ff4e4e",
        date: "May 2023 - Aug 2023",
        points: [
            "Worked on the upcoming “The Sims” game.",
            "Implemented features to clear the Player Profile cache in the admin panel, reducing QA process time by 20%.",
            "Implemented a way to track and display service versions into debug-tools.",
            "Created a new player search algorithm to include all player attributes, improving search accuracy by 30% and enhancing user engagement.",
            "Used Jasmine to test Angular-based front-end applications to ensure software reliability and maintainability.",
            "Created automated sign-in processes to improve QAs testing environment.",
        ],
    },
    {
        title: "Bioinformatic Analyst",
        company_name: "University of Miami",
        icon: um,
        iconBg: "#075536",
        date: "May 2021 - August 2021",
        points: [
            "Researched computational identification of different types of kinases that control nerve degeneration.",
            "Ran an R process to curate data in order to identify different types of kinases.",
            "Created a Machine Learning algorithm, that could detect potential kinases",
            "Gathered data from a researcher and used a computational network propagation algorithm to identify direct flow of information to determine candidate kinases.",
            " Created UI to visualize the outcome of the machine learning algorithm."
        ],
    },
];

export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/marcorivas06',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/rivas-marcos/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Fitness Flex',
        description: 'Engineered a comprehensive gym tracker app named Fitness Flex, designed to empower fitness enthusiasts with tools for tracking workouts, and progress milestones.',
        link: 'https://www.fitnessflex.app/',
    },
    {
        iconUrl: summiz,
        theme: "btn-back-yellow",
        name: "AI Summarizer Application",
        description: "A dynamic application designed to automate the generation of concise summaries from extensive text documents.",
        link: 'https://github.com/marcorivas06/improeGptSummary',
    }
];