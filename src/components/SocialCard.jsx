import React, {useState} from "react";
import "../style/socialcard.css"
function SocialCard(props){

    const [style, setStyle] = useState({
        color: props.color,
        backgroundColor: "white",
        transition:"0.6s"
    });

    const [style2, setStyle2] = useState({
        color:"black",
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.75)",
        transition:"0.6s"
    });

    const url = props.url;
    return(
        <div className="social-card-container" id="social-card-container" style={style2} 
            onMouseOver={function(){
                setStyle2({
                    color:props.color,
                    boxShadow:`0px 3px 20px ${props.color}`,
                    transition:"0.6s"
                })
            }} 
            onMouseOut={function(){
                setStyle2({
                    color:"black",
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.75)",
                    transition:"0.6s"
                })
            }}
        >
            <div className="card-details" id="card-details">
                {props.icons}
                <h2 className="social-title">{props.name}</h2>
                <h3 className="social-tab">{props.tag}</h3>
            </div>
            <div className="follow-me-button">
                <button className="follow-me" id="follow-me" style={style} 
                onMouseOver={function(){
                    // alert("Hello");
                    setStyle({color:"white", backgroundColor: props.color})
                }}
                onMouseOut={function(){
                    setStyle({color:props.color, backgroundColor:"white"})
                }}
                onClick={function(){
                    window.open(url);
                }}
                > {props.btnName} </button>
            </div>
        </div>
    );
}

export default SocialCard;