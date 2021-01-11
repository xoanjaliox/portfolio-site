 import React from 'react';
 import { Grid, Typography } from "@material-ui/core";

 import resumeData from "../../utils/resumeData";
 import "./Resume.css";

const Resume = () => {
    return (
      <>
        {/* About Me */}
        <Grid container className="section">
            <Grid item className="section-title" xs={12}>
                <span></span>
                <Typography variant="h6">About Me</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography className="aboutme-text">{resumeData.about}</Typography>
            </Grid>
        </Grid>

        {/* Education & Experience */}
        <Grid container className="section"></Grid>

        {/* Services */}
        <Grid container className="section"></Grid>

        {/* Skills */}
        <Grid container className="section"></Grid>

        {/* Contact */}
        <Grid container className="section"></Grid>
      </>
    );
}

export default Resume
