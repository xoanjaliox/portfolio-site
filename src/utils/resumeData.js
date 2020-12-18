import React from "react";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default {
    name: ' Anjali Sharma',
    title: ' Designer & Developer',

    location: 'Pleasant Hill, CA',
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
    }

}