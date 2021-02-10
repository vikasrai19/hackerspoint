import React, { useState } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import {isMobile} from "react-device-detect";
import Home from "../pages/Home";
import Posts from "../pages/Posts";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import "../style/Header.css";
import Menu from "@material-ui/icons/Menu";
import Close from "@material-ui/icons/Close";
import Post1 from "../blogPosts/Post1";
import Post2 from "../blogPosts/Post2";
import Post3 from "../blogPosts/Post3";
import Post4 from "../blogPosts/Post4";

function Header(){
    
    const [isExpanded, setIsExpanded] = useState(false);

    window.onload = () => {

        if(document.getElementById('header') && document.getElementById('nav-bar') && document.getElementById('menu-btn') ){
            var header = document.getElementById('header');
            var navBar = document.getElementById('nav-bar');
            var menuBtn = document.getElementById('menu-btn')
            menuBtn.style.display = "initial";
            if(!isMobile){
                menuBtn.style.display = "none";
            }
            menuBtn.onclick = () => {
                console.log("Title Clicked")
                if(isMobile){
                    if(navBar.style.display === "none"){
                        navBar.style.display = "initial";
                        setIsExpanded(true);
                    }else{
                        navBar.style.display = "none";
                        setIsExpanded(false);
                    }

                    if(header.style.height === "80px"){
                        header.style.height = "280px";
                    }else{
                        header.style.height = "80px";
                    }
                }
            }
        }
        

    }

    return(
        <>
            <div id="header" className="header">
                <div id="title" className="title">
                    <div className="menu-btn" id="menu-btn">
                        {isExpanded ? <Close /> : <Menu />}
                    </div>
                    <h1>Hackers Point</h1>
                </div>
                <div className="nav-bar" id="nav-bar">
                    <Link to="/"><NavLinks name="Home" /></Link>
                    <Link to="/posts"><NavLinks name="Posts" /></Link>
                    <Link to="/services"><NavLinks name="Services" /></Link>
                    <Link to="/contact"><NavLinks name="Contact" /></Link>
                </div>
            </div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/posts" component={Posts} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/services" component={Services} />
                <Route exath path="/intro-to-termux" component={Post1} />
                <Route exact path="/setting-up-flutter-in-ubuntu" component={Post2} />
                <Route exact path="/hello-world-flutter-app" component={Post3} />
                <Route exact path="/artificial-intelligence" component={Post4} />
                <Redirect to="/" />
            </Switch>
        </>
    );
}

function NavLinks(props){

    return(
        <div className="nav-links" id="nav-links">
            <h3>{props.name}</h3>
        </div>
    );
}


export default Header;