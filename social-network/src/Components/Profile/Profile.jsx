import React from 'react';

const Profile = (props)  => {
    debugger;
    let fullName = null;
    if(props.profile)
    {
        fullName = props.profile.fullName;
    }
    return (
        <div>
            {props.status}
            {fullName}
        </div>
    );
}

export default Profile;