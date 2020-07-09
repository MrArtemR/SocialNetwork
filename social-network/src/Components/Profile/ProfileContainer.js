import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './Profile';
import {getStatusTC} from "../../redux/profileReducer";

class ProfileContainer extends React.Component {
    componentDidMount(){
        this.props.getStatus();
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.match.params.status !== prevProps.match.params.status){
            this.props.getStatus();
        }
    }

    render(){
        return (
            <Profile status={this.props.status}/>
        );
    }
}

let mapStateToProps =  (state) => ({
    status : state.profile.status
});

let mapDispatchToProps = {
    getStatus : getStatusTC
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(ProfileContainer);

