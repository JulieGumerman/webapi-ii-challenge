import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPosts } from "../actions/index.js";
import Article from "./Article";

const Articles = ({ getPosts, posts }) => {

    useEffect(() => {
        getPosts();
    }, []);

    return (
        posts.map(article => <Article article={article}/>)
    );
}

const mapStateToProps = state => {
    console.log("hello from MSTP", state.posts)
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, { getPosts }) (Articles);