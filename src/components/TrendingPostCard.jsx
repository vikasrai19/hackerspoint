import React, {useState} from "react";
import "../style/TrendingPostCard.css";
import {isMobile} from "react-device-detect";

function TrendingPostCard(props) {

    const cardContainer = {
        height: "200px",
        width: "300px",
        margin: "10px 5px",
        boxShadow: "0px 10px 25px rgba(0,0,0,0.75)",
    }

    const lowerLayer = {
        height: "200px",
        width:"300px",
        display:"flex",
        flexDirection: "column",
        justifyContent:"flex-end"
    }

    const [imgStyle, setImgStyle] = useState({
        objectFit:"cover",
        overflow: "hidden",
        height: '200px',
        width: "300px",
        position:"absolute",
        filter:"blur(0px)",
        zIndex:"1",
        transition:"0.8s"
        }
    );
    const [upperLayer, setUpperLayer] = useState({
        position:"absolute",
        width: "300px",
        height:"70px",
        zIndex: "5",
        animation: "2s ease-in-out",
        display:"none",
        color:"white",
        padding: "5px 10px",
        transition:"0.8s"
    });

    const mobileStyle = {
        display:"flex",
        color:"white",
        backgroundColor:"rgba(0,0,0,0.75)",
        zIndex:"5",
        justifyContent:"center",
        fontSize: "12px"
    }

    return(
        <div className="card-container" style={cardContainer} 
        onMouseOver={() => {
            setImgStyle({
                objectFit:"cover",
                overflow: "hidden",
                height: '200px',
                width: "300px",
                position:"absolute",
                filter:"blur(2px)",
                zIndex:"1",
                transition:"0.8s"
            });
            setUpperLayer({
                position:"absolute",
                width: "290px",
                zIndex: "5",
                animation: "2s ease-in-out",
                display:"initial",
                color:"white",
                padding: "0 5px", 
                fontSize:"12px",
                backgroundColor: "rgba(0,0,0,0.75)",
                transition:"0.8s"            
            });
        }}
        onMouseOut={() => {
            setImgStyle(
                {
                    objectFit:"cover",
                    overflow: "hidden",
                    height: '200px',
                    width: "300px",
                    position:"absolute",
                    filter:"blur(0px)",
                    zIndex:"1",
                    transition:"0.8s",
                }
            );
            setUpperLayer({
                position:"absolute",
                width: "300px",
                height:"70px",
                animation: "2s ease-in-out",
                display:"none",
                zIndex: "5",
                transition:"0.8s"
            });
        }}
        >
            <div className="lower-layer" style={lowerLayer} onClick={() => {
                window.open(props.link,"_self");
            }}>
                <img src={props.imgSrc} alt="" style={imgStyle}  /> 
                <div className="upper-layer" style={isMobile ? mobileStyle : upperLayer} ><h2 style={{
                    textAlign:"center"
                }} >{props.title}</h2></div>
            </div>
        </div>
    );
}

export default TrendingPostCard;