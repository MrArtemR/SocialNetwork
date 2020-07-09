import { profileAPI } from "../API/socialNetworkAPI";

const SET_STATUS = "social-network/profile/SET-STATUS";

const MY_PROFILE_ID = "6911";

let initialState = {
    status: ""
}

const profileRedicer  = (state = initialState, action) => {
    switch(action.type){
        case SET_STATUS:
            return {...state, status : action.status};
        default:
            return state;
    }
}

export const setStatusAC = (status) => ({type : SET_STATUS, status});

export const getStatusTC = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(MY_PROFILE_ID);
    dispatch(setStatusAC(response.data));
}

export default profileRedicer;

