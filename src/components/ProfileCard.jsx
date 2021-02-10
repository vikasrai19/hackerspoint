import React from "react";
import "../style/profileCard.css";

function ProfileCard(){

    const url = "https://instagram.fblr15-1.fna.fbcdn.net/v/t51.2885-19/s150x150/91188451_521000222135939_5174106037308882944_n.jpg?_nc_ht=instagram.fblr15-1.fna.fbcdn.net&_nc_ohc=sQxT9blqpI8AX_60BoX&tp=1&oh=3432d1dce7c521add1e409d3c7ece376&oe=600AC506";

    return(
        <div className="profile-card" id="profile-card">
            <div className="profile-pic-container" id="profile-pic-container">
                <img src={url} alt="" className="profile-pic" id="profile-pic"/>
            </div>
            <div className="spacer-cus"></div>
            <div className="profile-details" id="profile-details">
                <h2 className="name" id="name">Vikas Rai<br />
                    <h3>Student / Tech Enthusiast</h3>
                </h2>
                <div className="desc" id="desc">
                    <p className="admin-details" id="admin-details">I am student. I love programming and I develop real world apps for both Android and Web Apps.<br />I run a youtube channel called <span className="yt">Hackers Point</span> where I share my knowledge of Ethical Hacking with my dear subscribers.Link of the channel will placed in the bottom section of this page. </p>
                    <button className="read-more" id="read-more">Read More</button>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;