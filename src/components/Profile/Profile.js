import React from 'react'
import { Typography } from '@material-ui/core';
import displaypic from '../../assets/images/displaypic.jpg';
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import resumeData from '../../utils/resumeData';
import './Profile.css';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import CustomButton from '../Button/Button.js';
import GetAppIcon from '@material-ui/icons/GetApp';


const CustomTimelineItem = ({title, text, link}) => (
    <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent className='timeline-content'>
            
            {link ? (
              <Typography className='timelineItem-text'>
                <span>{title}:</span>
                <a href={link} target='_blank' >
                  {text}
                </a>
              </Typography>
            ) : (
              <Typography className='timelineItem-text'>
                  <span>{title}:</span>{text}
              </Typography>
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
                    <CustomTimeline icon={<PersonOutlineOutlinedIcon />}>
                      <CustomTimelineItem title ='Name' text={resumeData.name}/>
                      <CustomTimelineItem title ='Title' text={resumeData.title}/>
                      <CustomTimelineItem title ='Email' text={resumeData.email}/>

                      {Object.keys(resumeData.socials).map(key => (
                          <CustomTimelineItem title ={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link}/>
                      ))}
                    </CustomTimeline> 
                    <br />
                    <CustomButton text={'Download resume'} icon={<GetAppIcon />}/>

                </div>

            </div>
        </div>
    )
}

export default Profile;
