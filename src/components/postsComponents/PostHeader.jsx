import React from "react";

function PostHeader(props){

    const style = {
        fontSize: "30px"
    }

    return(
        <h2 className="post-header" style={style} >{props.text}</h2>
    );
}

export default PostHeader;