import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../../components/Timeline/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import CustomButton from "../../components/Button/Button";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import resumeData from "../../utils/resumeData";
import "./Resume.css";
import TimelineDot from "@material-ui/lab/TimelineDot";

const Resume = () => {
  return (
    <>
      {/* About Me */}
      <Grid container className="section pb_45 pt_45">
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

        <Grid item xs={12}>
          <Grid container spacing={3} justify="space-around">
            {resumeData.services.map((service) => (
              <Grid item xs={12} sm={4} m={3}>
                <div className="service">
                  <Icon className="service-icon">{service.icon}</Icon>
                  <Typography className="service-title" variant="h6">
                    {service.title}
                  </Typography>
                  <Typography className="service-description" variant="body2">
                    {service.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Skills */}
      <Grid container className="section graybg pb_45 p_40">
        <Grid item xs={12}>
          <Grid container justify="space-between" spacing={3}>
            {resumeData.skills.map((skill) => (
              <Grid item xs={3} s={4} m={3}>
                <Paper elevation="0" className="skill">
                  <Typography variant="h6" className="skill-title">
                    {skill.title}
                  </Typography>
                  {skill.description.map((element) => (
                    <Typography variant="body2" className="skill-description">
                      <TimelineDot
                        variant="outlined"
                        className="timeline-dot"
                      />
                      {element}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Contact */}
      <Grid container className="section pt_45 pb_45">
        {/* Left Contact Form */}
        <Grid item xs={12} lg={7}>
          <Grid container>
            <Grid item className="section-title mb_30">
              <span></span>
              <h6 className="sectiontitle-text">Contact Me</h6>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name="name" label="Name" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name="email" label="E-mail" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth name="message" label="Message" multiline rows={4} />
                </Grid>
                <Grid item xs={12}>
                  <CustomButton text="Submit" />
                </Grid>
              </Grid>
            </Grid>

            {/* Right Contact Info */}
            <Grid item xs={12} lg={5}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;
