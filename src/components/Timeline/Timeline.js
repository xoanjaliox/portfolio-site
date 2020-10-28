import React from 'react'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import './Timeline.css';
import { Typography } from '@material-ui/core'
;
const CustomTimeline = ({ title, children }) => {
    return (
        <Timeline className ={'timeline'}>
        {/* Item header */}
          <TimelineItem className={'timeline-firstItem'}>
            <TimelineSeparator>
              <TimelineDot className={'timeline-dot-header'} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant='h6' className={'timeline-header'}>
              {title}
              </Typography>
              </TimelineContent>
          </TimelineItem>

        {children}

        {/* Remaining items */}
          <TimelineItem>
            <CustomTimelineSeparator />
            <TimelineContent>Code</TimelineContent>
           </TimelineItem>
        </Timeline>
    );
};

export const CustomTimelineSeparator = () => (
        <TimelineSeparator className={'separator-padding'}>
            <TimelineDot className={'timeline-dot-header'} />
            <TimelineConnector />
        </TimelineSeparator>
)

export default CustomTimeline;
