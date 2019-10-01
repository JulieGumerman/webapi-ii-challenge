import axios from "axios";

const  GET_POSTS_START = "GET_POSTS_START";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";

const getPosts = () => {
    axios.get("http://localhost:1500/api/posts")
}