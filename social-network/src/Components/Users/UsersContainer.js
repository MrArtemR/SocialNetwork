import React, {useEffect} from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const { default: Preloader } = require("../Common/Preloader");
const { default: Users } = require("./Users");
const { getUesrsTC } = require("../../redux/usersReducer");

class UsersContainer extends React.Component{
    componentDidMount(){
        this.props.getUsers();
    }

    render(){
        if(!this.props.users.length)
        {
            return <Preloader/>
        }
        return(
            <div>
                <Users users={this.props.users}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    users : state.usersPage.users
});

let mapDispatchToProps = {
    getUsers : getUesrsTC
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(UsersContainer);