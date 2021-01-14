import React from "react";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import AccountTreeOutlinedIcon from '@material-ui/icons/AccountTreeOutlined';
import WebOutlinedIcon from '@material-ui/icons/WebOutlined';
import TableChartOutlinedIcon from '@material-ui/icons/TableChartOutlined';

export default {
    name: ' Anjali Sharma',
    title: ' Designer & Developer',

    city: 'Pleasant Hill, CA',
    email: ' anjali@anjali.com',
    phone: '408.509.3619',
    
    socials: {
        Linkedin: {
            link: 'https://www.linkedin.com/in/asharma89',
            text: ' asharma89',
            icon: <LinkedInIcon />
        },

        Github: {
            link: 'https://github.com/xoanjaliox',
            text: ' xoanjaliox',
            icon: <GitHubIcon />
        }
    },

    about: "Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this, which creature would you be unwilling to kiss? Poltergeist sticking charm, troll umbrella stand flying cars golden locket Lily Potter. Pumpkin juice Trevor wave your wand out glass orbs, a Grim knitted hats. \n\n Stan Shunpike doe patronus, suck his soul Muggle-Born large order of drills the trace. Bred in captivity fell through the veil, quaffle blue flame ickle diddykins Aragog. Yer a wizard, Harry Doxycide the woes of Mrs. Weasley Goblet of Fire.",
    
    experiences: [
        {
            title: "Work 1",
            date: "2018 - Present",
            description: "This is where a description of work duties & responsibilities will go. Should be about 3 lines of text."
        },

        {
            title: "Work 2",
            date: "2014 - 2015",
            description: "This is where a description of work duties & responsibilities will go. Should be about 3 lines of text."
        },

        {
            title: "Work 3",
            date: "Aug 2016 - Sept. 2018",
            description: "This is where a description of work duties & responsibilities will go. Should be about 3 lines of text."
        },
    ],

    educations: [
        {
            title: "Education 1",
            date: "2018 - Present",
            description: "This is where a description of work duties & responsibilities will go. Should be about 3 lines of text."
        },

        {
            title: "Education 2",
            date: "2014 - 2015",
            description: "This is where a description of work duties & responsibilities will go. Should be about 3 lines of text."
        },

        {
            title: "Education 3",
            date: "Aug 2016 - Sept. 2018",
            description: "This is where a description of work duties & responsibilities will go. Should be about 3 lines of text."
        },
    ],

    services: [
        {
            title: "Web Development",
            description: "Build websites with front & back end development.",
            icon: <WebOutlinedIcon />,
        },

        {
            title: "Visual Design",
            description: "Can create wireframes & mockups quickly .",
            icon: <TableChartOutlinedIcon />,
        },

        {
            title: "UX Design",
            description: "Create apps/websites using research to supporet design & functionality.",
            icon: <AccountTreeOutlinedIcon />,
        },
    ],

    skills: [
        {
            title: "Front End",
            description: [
                "ReactJS",
                "Javacript",
                "Boostrap",
                "Material UI",
            ],
            
        },

        {
            title: "Back End",
            description: [
                "NodeJS",
                "Javacript",
                "Boostrap",
                "Material UI",
            ],
        },

        {
            title: "Databases",
            description: [
                "Firebase",
                "MySQL",
                "MongoDB",
                "Material UI",
            ],
        },

        {
            title: "Source Control",
            description: [
                "Git",
                "Github",
            ],
        },
    ],


    
}

