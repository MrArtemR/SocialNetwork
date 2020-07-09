
const SET_STATUS = "social-network/profile/SET-STATUS";

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

export const getStatus = (status) => (dispatch) =>{
    let status = "test";
    dispatch(setStatusAC(status));
}

export default profileRedicer;

