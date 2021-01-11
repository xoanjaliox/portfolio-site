import React from 'react';
import { Typography } from "@material-ui/core";
import "./Footer.css";
import resumeData from "../../utils/resumeData";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-left">
                <Typography className="footer-name">
                    {resumeData.name} © 2021
                </Typography>
            </div>
            <div className="footer-right">
                <Typography className="footer-copyright">
                    Designed & Developed by < a href="/" target="_blank">Anjali Sharma </a>
                </Typography>
            </div>

        </div>
    )
}

export default Footer 
