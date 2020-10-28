import React from 'react'
import { Typography } from '@material-ui/core';
import displaypic from '../../assets/images/displaypic.jpg';
import CustomTimeline from '../Timeline/Timeline';
import './Profile.css';

const Profile = () => {
    return (
        <div className="profile container-shadow">
            <div className="profile-name">
                <Typography className="name">Anjali</Typography>
                <Typography className="title">Title</Typography>

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
