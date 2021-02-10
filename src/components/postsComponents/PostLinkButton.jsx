import React from "react";
import "../postsComponents/PostLinkButton.css";

function PostLinkButton(props){

    return(
        <div className="btn-container">
            <button className="btn hover-btn"
            onClick={function(){
                window.open(props.link);
            }}
            >{props.btnName}</button>
        </div>
    );
}

export default PostLinkButton;