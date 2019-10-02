import axios from "axios";

export const GET_POSTS_START = "GET_POSTS_START";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";

export const getPosts = () => dispatch => {
    dispatch({type: GET_POSTS_START})
    axios.get("http://localhost:1500/api/posts")
        .then(results => {
            dispatch({type: GET_POSTS_SUCCESS, payload: results.data})
            console.log(results)})
        .catch(err => console.log(err))

}