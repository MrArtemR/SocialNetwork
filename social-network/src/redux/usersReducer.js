import { unstable_renderSubtreeIntoContainer } from "react-dom";
import { usersAPI } from "../API/socialNetworkAPI";

const SET_USERS = "social-network/users/GET-USERS";

let initialState={
    users : []
}

const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_USERS:
            return {...state,  users : action.users};
        default:
            return state;
    }
}

const setUsersAC = (users) => ({type : SET_USERS, users});

export const getUesrsTC = (count,  page) => async (dispatch) =>{
    let response = await usersAPI.getUsers(count, page);
    dispatch(setUsersAC(response.data.items));
}

export default usersReducer;