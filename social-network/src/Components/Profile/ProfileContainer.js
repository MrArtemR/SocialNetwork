import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './Profile';
import {getStatus} from "../../redux/profileReducer";

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
        debugger;
        return (
            <Profile status={this.props.status}/>
        );
    }
}

let mapStateToProps =  (state) => ({
    status : state.profile.status
});

let mapDispatchToProps = {
    getStatus : getStatus
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(ProfileContainer);

