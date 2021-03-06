import React, {useEffect} from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './Profile';
import {getStatusTC, getProfileTC, updateStatusTC } from "../../redux/profileReducer";
import Preloader from '../Common/Preloader';

const ProfileContainer = (props) => {
    useEffect(() => {
        props.getStatus();
        props.getProfile();
    }, []);

    if(!props.profile)
    {
        return <Preloader/>
    }

    return (
        <Profile {...props} status={props.status}  profile={props.profile}/>
    );
} 

let mapStateToProps =  (state) => ({
    status : state.profilePage.status,
    profile : state.profilePage.profile
});

let mapDispatchToProps = {
    getStatus : getStatusTC,
    getProfile : getProfileTC,
    updateStatus : updateStatusTC
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(ProfileContainer);

