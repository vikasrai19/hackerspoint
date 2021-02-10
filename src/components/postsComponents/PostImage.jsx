import React from "react";

function PostImage(props){

    const contStyle = {
        display:"flex",
        flexDirection: "row",
        justifyContent: "center",
    }

    const style = {
        width:"450px",
        height: "254px",
        objectFit: "cover",
        overflow:"hidden",
        margin: "5px 10px"
    }

    return(
        <div className="img-container" style={contStyle}>
            <img src={props.imgSrc} alt="" className="post-image" style={style} />
        </div>
    );
}

export default PostImage;