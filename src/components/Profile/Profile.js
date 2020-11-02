import React from 'react'
import { Typography } from '@material-ui/core';
import displaypic from '../../assets/images/displaypic.jpg';
import CustomTimeline from '../Timeline/Timeline';

import resumeData from '../../utils/resumeData';
import './Profile.css';

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
