import React from "react";
import "../style/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

function Footer(){
    return(
        <div className="footer-section" id="footer-section">
            <div className="footer-data">
                <div className="footer-heading"><big><h1 onClick={function(){
                    window.open("/","_self");
                }}>Hackers Point</h1></big></div>
                <div className="footer-content"><p><center>The Ultimate</center></p></div>
            </div>

            <div className="footer-data">
                <div className="footer-heading"><h2>Services</h2></div>
                <div className="footer-content">
                    <p>Android App Development</p>
                    <p>Web App Development</p>
                    <p>Network Security</p>
                </div>
            </div>

            <div className="footer-data">
                <div className="footer-heading"><h2>Social Links</h2></div>
                <div className="footer-content">
                    <p onClick={function(){
                        window.open("https://www.instagram.com/_v.i.k.a.s_r.a.i_")
                    }} 
                    ><FontAwesomeIcon icon={faInstagram} />  Instagram</p>
                    <p onClick={function(){
                        window.open("https://www.youtube.com/channel/UC-F5o2H1NH7n0xsMd8UfEUA")
                    }} ><FontAwesomeIcon icon={faYoutube} />  Youtube</p>
                    <p onClick={function(){
                        window.open("https://discord.gg/P6mkr7u")
                    }} ><FontAwesomeIcon icon={faDiscord} />  Discord</p>
                    <p onClick={function(){
                        window.open("https://www.facebook.com")
                    }} ><FontAwesomeIcon icon={faFacebook} />  FaceBook</p>
                </div>
            </div>

            <div className="footer-data">
                <div className="footer-heading"><h2>Contact</h2></div>
                <div className="footer-content">
                    <p>Vikas Rai</p>
                    <p>vikasrai1906@gmail.com</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;