import React from "react";
import { Grid, Typography, } from "@material-ui/core";
import Icon from '@material-ui/core/Icon';
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../../components/Timeline/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from '@material-ui/icons/School';


import resumeData from "../../utils/resumeData";
import "./Resume.css";
import TimelineDot from "@material-ui/lab/TimelineDot";

const Resume = () => {
  return (
    <>
      {/* About Me */}
      <Grid container className="section pb_45">
        <Grid item className="section-title mb_30">
          <span></span>
          <h6 className="sectiontitle-text">About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="aboutme-text">
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>

      {/* Education & Experience */}
      <Grid container className="section pb_45">
        <Grid item className="section-title mb_30">
          <span></span>
          <h6 className="sectiontitle-text">Resume</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container className="resume-timeline">
            {/* Work Experience */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Work Experience" icon={<WorkIcon />}>
                {resumeData.experiences.map((experience) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className="timeline-content">
                      <Typography className="timeline-title">
                        {experience.title}
                      </Typography>
                      <Typography variant="caption" className="timeline-date">
                        {experience.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline-description"
                      >
                        {experience.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>


            {/* Education */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Education" icon={<SchoolIcon />}>
                {resumeData.educations.map((education) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className="timeline-content">
                      <Typography className="timeline-title">
                        {education.title}
                      </Typography>
                      <Typography variant="caption" className="timeline-date">
                        {education.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline-description"
                      >
                        {education.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Services */}
      <Grid container className="section pb_45">
        <Grid item className="section-title mb_30">
          <span></span>
          <h6 className="sectiontitle-text">My Services</h6>
        </Grid>

        <Grid item xs={12} >
          <Grid container spacing={3} justify="space-around">
              {resumeData.services.map((service) => (
                  <Grid item xs={12} sm={4} m={3}>
                    <div className="service">
                      <Icon className="service-icon">{service.icon}</Icon>
                      <Typography className="service-title" variant="h6">{service.title}</Typography>
                      <Typography className="service-description" variant="body2">{service.description}</Typography>
                    </div>
                  </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Skills */}
      <Grid container className="section"></Grid>

      {/* Contact */}
      <Grid container className="section"></Grid>
    </>
  );
};

export default Resume;
