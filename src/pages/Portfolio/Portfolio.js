import React, { useState } from "react";
import { Tab, Tabs, Grid } from "@material-ui/core";
import "./Portfolio.css";
import resumeData from "../../utils/resumeData";

const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All");

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
          onChange={(event, newValue) => setTabValue(newValue)}>
              <Tab label="All" value="All" className={tabValue == "All" ? "custom-tabs-item-active" : "custom-tabs-item"} />
          </Tabs>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
