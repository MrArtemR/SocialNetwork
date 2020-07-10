import * as axios from 'axios';

const axs = axios.create({
    withCredentials : true,
    baseURL : "https://social-network.samuraijs.com/api/1.0/",
    header : {
        "API-KEY" : "d2f8e5a3-785a-4fc2-9403-1f9a5afa837e"
    }
});

export const profileAPI =  {
    getProfile(userId){
        return axs.get(`profile/${userId}`);
    },
    getStatus(userId){
        return axs.get(`profile/status/${userId}`);
    },
    setStatus(status){
        return axs.put(`profile/status`,{status});
    }
}

export const usersAPI = {
    getUsers(count, page){
        return axs.get(`users?page=${page}&count=${count}`);
    }
}