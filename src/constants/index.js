import { meta, shopify, starbucks, tesla, teads, mc, barnes, dunkin, research } from "../assets/images";
import {
    car,
    contact,
    css,
    python,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
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
    typescript,
    cplus,
    c,
    java,
    okta,
    raspberry,
    arduino,
    wireshark,
    linux
} from "../assets/icons";

export const skills = [
    {
        imageUrl: python,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: cplus,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: c,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: okta,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: raspberry,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: arduino,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: linux,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: wireshark,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
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
    }
];

export const experiences = [
    {
        title: "Campus IT Support and Technical Specialist",
        company_name: "Manhattan College",
        icon: mc,
        iconBg: "#fbc3bc",
        date: "December 2021 - Present",
        points: [
            "Ensured network devices had static IP addresses within dedicated VLANs to enhance security.",
            "Developed Python and Bash scripts for automated room checks, enhancing operational efficiency.",
            "Streamlined software installations and updates using Bash, Python, and PowerShell scripts, reducing device boot times.",
            "Executed automation scripts in Python and PowerShell to guarantee up-to-date software availability.",
            "Utilized the Kace management system for continuous device monitoring and maintenance.",
            "Improved user support with AutoHotKey typing automation scripts. ",
            "Proficiently handled hardware installations, enhancing device performance and lifespan.",
        ],
    },
    {
        title: "IT Support Engineer Intern",
        company_name: "Teads Inc.",
        icon: teads,
        iconBg: "#accbe1",
        date: "July 2023 - December 2023",
        points: [
            "Installed RSA certificates on Mac devices using Jamf to ensure security and compliance, and utilized Mobile Device Management (MDM) tools for seamless device operation, enhancing user productivity.",
            "Collaborated with the team to develop and deploy efficient Bash scripts, streamlining processes, improving operational efficiency, and addressing software bugs effectively.",
            "Resolved over 300 user-reported issues concerning hardware and software in a 6-month internship period, achieving a 95% satisfaction rating from feedback surveys by employing diagnostic tools and excellent problem-solving skills.",
            "Resolved over 30 unique technical issues per day, ranging from software troubleshooting to hardware repairs, enhancing overall user satisfaction by 85% during a 6-month internship.",
            "Resolved over 150 weekly technical support tickets, achieving a resolution rate 30% faster than company average by employing systematic troubleshooting protocols and leveraging detailed knowledge of Windows and MacOS environments.",
            

        ],
    },
    // {
    //     title: "Research Assistant",
    //     company_name: "Manhattan College",
    //     icon: research,
    //     iconBg: "#b7e4c7",
    //     date: "Sept 2021 - March 2022",
    //     points: [
    //         "Integrated blockchain technology, specifically Hyperledger, into IoT devices for secure and efficient home automation systems.",
    //         "Improved product performance by addressing user data privacy, system security, and energy consumption using Hyperledger technology. ",
    //         "Developed a three-tier architecture based on Hyperledger, eliminating Proof of Work (POW) for resource efficiency in home automation. ",
    //         "Ensured secure communication among devices and collectors through overlay networking within the Hyperledger framework, reducing network overhead and delay. ",
    //     ],
    // },
    {
        title: "Sales Associate",
        company_name: "Barnes & Nobles",
        icon: barnes,
        iconBg: "#a2d2ff",
        date: "Aug 2021 - May 2022",
        points: [
            "Supported the sales strategy for new and existing Mass and Specialty Channel accounts",
            "Provided administrative support including but not limited to preparing for sales presentations: running sales reports, creating custom catalogs, designing PowerPoint presentations, managing account portals, and organizing sales materials",
            "Provided forecasting and sales analyses for accounts on daily and weekly basis or as needed",
            " Managed and process orders from all Mass and Specialty Channel accounts; work closely with the inventory team to manage stock demands and order release timelines",
            "Assisted with special projects and finds ways to increase incremental revenue within accounts and with new accounts"
        ],  
    },
    {
        title: "Shift Leader",
        company_name: "Dunkin Donuts",
        icon: dunkin ,
        iconBg: "#a2d2ff",
        date: "June 2018 - Feb 2020",
        points: [
            "Talked employees into, through, and out of position on each shift, communicating responsibilities, providing feedback, and recognizing achievements in a respectful manner.",
            "Deployed team members appropriately to meet guests’ needs and service standards throughout shift.",
            "Reinforced the use of systems, tools, and procedures throughout shift, while taking appropriate steps to correct deficiencies.",
            "Monitored team performance to ensure quality, service, and cleanliness standards are met throughout shift.",
            "Participated in code reviews and providing constructive feedback to other developers.",
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
        link: 'https://github.com/SRshohan',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sohanur02',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Secure Web Authentication System',
        description: 'Develop a secure web authentication system that enhances both user experience and security for professional websites.',
        link: 'https://github.com/SRshohan/newtwork_security_project.git',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'UBOS Shell - UNIX Shell and Program Selection',
        description:  'This project implements a custom UNIX shell interface in C++ that enables users to execute system commands and access executable programs from the current directory. The shell runs on Debian Linux, using the g++ compiler for building.',
        link: 'https://github.com/SRshohan/Unix_Linux_Project.git',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Muglee AI',
        description: 'YouTube Transcript Interaction Dashboard',
        link: 'https://github.com/SRshohan/youTubeChat.git',
    },
   
];