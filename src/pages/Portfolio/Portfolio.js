import React, { useState } from "react";
import {
  Tab,
  Tabs,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";
import Grow from "@material-ui/core/Grow";
import "./Portfolio.css";
import resumeData from "../../utils/resumeData";

const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All");

  const ProjectDialog = () => {
      <Dialog>
          <DialogTitle></DialogTitle>
          <img src="" alt="" />
          <DialogContent></DialogContent>
      </Dialog>
  }

  return (
    <Grid container className="section pb_45 pt_45">
      {/* Title */}
      <Grid item className="section-title mb_30">
        <span></span>
        <h6 className="sectiontitle-text">Portfolio</h6>
      </Grid>

      {/* Tabs */}
      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor="white"
          className="custom-tabs"
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab
            label="All"
            value="All"
            className={
              tabValue === "All"
                ? "custom-tabs-item-active"
                : "custom-tabs-item"
            }
          />

          {[...new Set(resumeData.projects.map((item) => item.tag))].map(
            (tag) => (
              <Tab
                label={tag}
                value={tag}
                className={
                  tabValue === "All"
                    ? "custom-tabs-item-active"
                    : "custom-tabs-item"
                }
              />
            )
          )}
        </Tabs>
      </Grid>

      {/* Projects */}
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {resumeData.projects.map((project) => (
            <>
              {tabValue === project.tag || tabValue === "All" ? (
                <Grid item>
                  <Grow in timeout={1000}>
                    <Card className="custom-card" onClick={() => console.log("sdsf")}>
                      <CardActionArea>
                        <CardMedia className="custom-card-image" image={project.image} title={project.title}/>
                        <CardContent>
                          <Typography className="custom-card-title">{project.title}</Typography>
                          <Typography variant="body2" className="custom-card-description">{project.description}</Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
