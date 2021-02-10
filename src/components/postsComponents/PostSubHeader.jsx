import React from "react";

function PostSubHeader(props){

    const style = {
        fontSize: "22px",
    }

    return(
        <h3 className="post-sub-header" style={style} > 
            {props.text}
        </h3>
    );
}

export default PostSubHeader;