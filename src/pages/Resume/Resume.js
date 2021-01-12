 import React from 'react';
 import { Grid, Typography } from "@material-ui/core";
 import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/Timeline';
 import WorkIcon from '@material-ui/icons/Work';

 import resumeData from "../../utils/resumeData";
 import "./Resume.css";

const Resume = () => {
    return (
      <>
        {/* About Me */}
        <Grid container className="section pb_45">
            <Grid item className="section-title mb_30">
                <span></span>
                <h6 className="sectiontitle-text">About Me</h6>
            </Grid>
            <Grid item xs={12} >
                <Typography variant="body2" className="aboutme-text">{resumeData.about}</Typography>
            </Grid>
        </Grid>

        {/* Education & Experience */}
        <Grid container className="section">
            <Grid item className="section-title mb_30">
                <span></span>
                <h6 className="sectiontitle-text">Resume</h6>
            </Grid>

            <Grid item xs={12}>
              <Grid container>
                {/* Work History */}
                <Grid item sm={12} md={6}>
                  <CustomTimeline
                  title="Work History"
                  icon={<WorkIcon />}></CustomTimeline>
                </Grid>
                {/* Education */}
                <Grid item sm={12} md={6}></Grid>
              </Grid>
            </Grid>




        </Grid>

        {/* Services */}
        <Grid container className="section"></Grid>

        {/* Skills */}
        <Grid container className="section"></Grid>

        {/* Contact */}
        <Grid container className="section"></Grid>
      </>
    );
}

export default Resume;
