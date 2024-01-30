import { meta, shopify, um, tesla, ea } from "../assets/images";
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
    {
        title: "Full Stack Software Engineer",
        company_name: "Electronic Arts - EA",
        icon: ea,
        iconBg: "#ff4e4e",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Worked on the upcoming “The Sims” game.",
            "Implemented features to clear the Player Profile cache in the admin panel, reducing QA process time by 20%.",
            "Implemented a way to track and display service versions into debug-tools.",
            "Created a new player search algorithm to include all player attributes, improving search accuracy by 30% and enhancing user engagement.",
            "Used Jasmine to test Angular-based front-end applications to ensure software reliability and maintainability.",
            "Created automated sign-in processes to improve QAs testing environment.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
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

// export const projects = [
//     {
//         iconUrl: pricewise,
//         theme: 'btn-back-red',
//         name: 'Amazon Price Tracker',
//         description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
//         link: 'https://github.com/adrianhajdin/pricewise',
//     },
//     {
//         iconUrl: threads,
//         theme: 'btn-back-green',
//         name: 'Full Stack Threads Clone',
//         description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
//         link: 'https://github.com/adrianhajdin/threads',
//     },
//     {
//         iconUrl: car,
//         theme: 'btn-back-blue',
//         name: 'Car Finding App',
//         description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
//         link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
//     },
//     {
//         iconUrl: snapgram,
//         theme: 'btn-back-pink',
//         name: 'Full Stack Instagram Clone',
//         description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
//         link: 'https://github.com/adrianhajdin/social_media_app',
//     },
//     {
//         iconUrl: estate,
//         theme: 'btn-back-black',
//         name: 'Real-Estate Application',
//         description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
//         link: 'https://github.com/adrianhajdin/projects_realestate',
//     },
//     {
//         iconUrl: summiz,
//         theme: 'btn-back-yellow',
//         name: 'AI Summarizer Application',
//         description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
//         link: 'https://github.com/adrianhajdin/project_ai_summarizer',
//     }
// ];