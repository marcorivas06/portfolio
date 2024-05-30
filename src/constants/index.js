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
        title: "Software Engineer",
        company_name: "Electronic Arts - Madden EA Sports",
        icon: ea,
        iconBg: "#ff4e4e",
        date: "Apr 2024 - Present",
        points: [    
            "Engage in the day-to-day development and debugging of gameplay features for the Madden series, using ActionScript 2.0 within Flash Develop to ensure smooth and consistent game performance.",
            "Utilize Perforce (P4V) for efficient version control and Swarm for conducting thorough code reviews, contributing to the maintenance of code quality and team collaboration.",
            "Resolve complex gameplay bugs and implement feature enhancements, significantly improving player experience and reducing crash rates in production builds.",
            "Collaborate with a multidisciplinary team of designers, developers, and artists to translate game design concepts into functional and engaging gameplay elements within the Frostbite engine.",
        ],
    },
    {
        title: "Full Stack Software Engineer",
        company_name: "Electronic Arts - The Sims",
        icon: ea,
        iconBg: "#ff4e4e",
        date: "May 2023 - Apr 2024",
        points: [
        "Conducted comprehensive testing using Cypress and Junit to ensure application reliability and maintain high-quality code standards.",
        "Created automated sign-in processes to improve QAs testing environment.",
        "Engaged in the development and maintenance of web applications using modern technologies like Node.js, Express.js, and React.js to enhance gameplay features within the Madden series.",
        "Implemented microservices architecture for scalable and modular game functionality, improving system efficiency and player experience.",
        "Designed and developed RESTful APIs to facilitate communication between front-end and back-end components, enhancing game interactivity and performance.",
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