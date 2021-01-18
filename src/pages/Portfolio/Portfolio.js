import React, { useState } from "react";
import { Tabs } from "@material-ui/core";
import "./Portfolio.css";

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
      <Grid item>
        <Tabs
          value={tabValue}
          indicatorColor="white"
          className="custom-tabs"
          onChange={(event, newValue) => setTabValue(newValue)}
        ></Tabs>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
