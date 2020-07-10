import React from 'react';
import styles from './Profile.module.css';
import userPhoto  from '../../images/user.png';
import Preloader from '../Common/Preloader';



const Profile = (props)  => {
    if(props.profile === null)
    {
        return <Preloader/>
    }

    return (
        <div className={styles.description}>
            <div>
              <img src={props.profile.photos.large || userPhoto} className={styles.mainPhoto}/>  
            </div>
            <div>
                {props.profile.fullName || "---"}
            </div>
            <div>
                {props.status || "---"}
            </div>
            <div>
                {props.profile.aboutMe || "---"}
            </div>  
        </div>
    );
}

export default Profile;