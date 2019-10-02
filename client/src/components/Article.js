import React from "react";

const Article = (props) => {
    return (
        <div key={props.article.id}>
            <p>{props.article.title}</p>
            <p><em>{props.article.contents}</em></p>
            <p><em>{props.article.updated_at}</em></p>
        </div>

    );
        
}

export default Article;