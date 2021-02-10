import React from "react";

function PostContent(props){

    const style= {
        fontSize: "18px",
    }
    return(
        <p style={style} >{props.text}</p>
    );
}

export default PostContent;