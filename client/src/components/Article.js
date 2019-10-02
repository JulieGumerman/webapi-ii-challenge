import React from "react";

const Article = ({posts}) => {
    return (
        <div key={posts.id}>
            <p>{posts.title}</p>
            <p><em>{posts.content}</em></p>
            <p><em>{posts.updated_at}</em></p>
        </div>
    );
        
}

export default Article;