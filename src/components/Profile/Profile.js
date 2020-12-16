import React from 'react'
import { Typography } from '@material-ui/core';
import displaypic from '../../assets/images/displaypic.jpg';
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline';
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import resumeData from '../../utils/resumeData';
import './Profile.css';

const CustomTimelineItem = ({title, text, link}) => (
    <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent>
            <span>{title}</span>
            {link ? (<></>) : (
                <Typography> </Typography>
            )}
        </TimelineContent>
       
    </TimelineItem>
)

const Profile = () => {
    return (
        <div className="profile container-shadow">
            <div className="profile-name">
                <Typography className="name">{resumeData.name}</Typography>
                <Typography className="title">{resumeData.title}</Typography>

                <figure className="profile-image">
                    <img src={displaypic} alt=""/>
                </figure>

                <div className="profile-info">
                    <CustomTimeline />
                    <br/>
                    <button>my Button</button>

                </div>

            </div>
        </div>
    )
}

export default Profile;
