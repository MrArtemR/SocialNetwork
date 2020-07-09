import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './Profile';
import {getStatusTC, getProfileTC } from "../../redux/profileReducer";

class ProfileContainer extends React.Component {
    componentDidMount(){
        this.props.getStatus();
        this.props.getProfile();
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.match.params.status !== prevProps.match.params.status){
            this.props.getStatus();
            this.props.getProfile();
        }
    }

    render(){
        return (
            <Profile status={this.props.status}  profile={this.props.profile}/>
        );
    }
}

let mapStateToProps =  (state) => ({
    status : state.profilePage.status,
    profile : state.profilePage.profile
});

let mapDispatchToProps = {
    getStatus : getStatusTC,
    getProfile : getProfileTC
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(ProfileContainer);

