import React from "react";
import "./PostCode.css";

function PostCode(props){

    const codeList = props.list.map((x, i) => {
        return (<p>{x}</p>);
    });

    return(
        <div className="main-container">
                <div className="code-container" >
                <div className="code-container-header">
                    <Circle color="red" />
                    <Circle color="yellow" />
                    <Circle color="green" />
                </div>
                <div className="code-area">
                    {codeList}
                </div>
            </div>
        </div>
    );
}

function Circle(props){

    const style = {
        backgroundColor:props.color,
        height: "15px",
        width:"15px",
        borderRadius:"15px",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginRight:"8px",
        color:"black",
        fontFamily:"sans-serif"
    }

    return(
        <div className="circle" style={style}  >{props.icon}</div>
    );
}

export default PostCode;