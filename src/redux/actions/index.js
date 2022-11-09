import {
    GET_BOOKINGS,
    ADD_BOOKINGS
} from "./actionTypes";

export const getPosts = () => {
    return {
        type: GET_BOOKINGS,
    };
};
export const addPost = (data) => {
    return {
        type: ADD_BOOKINGS, payload: data
    };
};
