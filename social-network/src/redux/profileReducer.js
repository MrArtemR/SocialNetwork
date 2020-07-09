import { profileAPI } from "../API/socialNetworkAPI";

const SET_STATUS = "social-network/profile/SET-STATUS";
const SET_PROFILE  = "social-network/profile/SET_PROFILE";

const MY_PROFILE_ID = "6911";

let initialState = {
    status: "",
    profile :  null
}

const profileRedicer  = (state = initialState, action) => {
    switch(action.type){
        case SET_STATUS:
            return {...state, status : action.status};
        case SET_PROFILE:
            return  {...state, profile : action.profile }
        default:
            return state;
    }
}

export const setStatusAC = (status) => ({type : SET_STATUS, status});

export const setProfileAC = (profile) => ({type: SET_PROFILE, profile});

export const getStatusTC = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(MY_PROFILE_ID);
    dispatch(setStatusAC(response.data));
}

export const getProfileTC = (userId) => async(dispatch) => {
    let response = await profileAPI.getProfile(MY_PROFILE_ID);
    dispatch(setProfileAC(response.data));
}

export default profileRedicer;

