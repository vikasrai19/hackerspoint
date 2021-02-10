import React from "react";
import ProfileCard from "../components/ProfileCard";
import "../style/contact.css";
import SocialCard from "../components/SocialCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import firebase from "firebase";

function Contact(){

    firebase.analytics().logEvent('Contact Page');

    return(
        <div className="home-container" id="home-container">
            <div className="profile-container" id="profile-container">
                <h2 className="profile-text">Profile</h2>
                <ProfileCard />
            </div>
            <div className="spacer-cus1" id="spacer-cus1"></div>
            <h2>Social Links</h2>
            <div className="social-card-tab" id="social-card-tab">
                <SocialCard icons={<FontAwesomeIcon icon={faInstagram} size="2x" color="purple"/>} name="Instagram" btnName="Follow Me" color="purple" tag="_v.i.k.a.s_r.a.i_" url="https://www.instagram.com/_v.i.k.a.s_r.a.i_" />
                <SocialCard icons={<FontAwesomeIcon icon={faYoutube} size="2x" color="red" />} name="Youtube" btnName="Subscribe" color="red" tag="Hackers Point" url="https://www.youtube.com/channel/UC-F5o2H1NH7n0xsMd8UfEUA" />
                <SocialCard icons={<FontAwesomeIcon icon={faDiscord} size="2x" color="purple" />} name="Discord" btnName="Join Server" color="purple" tag="Hackers Point" url="https://discord.gg/P6mkr7u" />
                <SocialCard icons={<FontAwesomeIcon icon={faFacebook} size="2x" color="blue" />} name="Facebook" btnName="Follow" color="blue" tag="Vikas Rai" url="https://facebook.com"/>
            </div>
        </div>
    );
}

export default Contact;