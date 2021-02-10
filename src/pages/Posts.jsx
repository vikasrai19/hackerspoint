import React from "react";
import BlogPostContainer from "../components/BlogPostContainer";
import Matrix from "../assets/Post1/matrix.png";
import "../style/posts.css"; 
import Flutter from "../assets/Post2/flutter.png";
import Hello from "../assets/Post3/hello.png";
import firebase from "firebase";
import AI from "../assets/Post4/ai.jpeg";


function Posts(){

    firebase.analytics().logEvent('Posts Page');

    return(
        <div className="blog-post-section">
            <h2>Blog Posts</h2>
            <div className="blog-post-row">
                <BlogPostContainer title="Intro To Termux" subtitle="Short Descriptive Introduction to Termux App Terminal" imgSrc={Matrix} link="/intro-to-termux"/>
                <BlogPostContainer title="Setting Up Flutter In Ubuntu" subtitle="Create your first android app using Flutter framework" imgSrc={Flutter} link="/setting-up-flutter-in-ubuntu"/>
                <BlogPostContainer title="Hello World Flutter App" subtitle="Creating the first hello world app using Flutter Framework" imgSrc={Hello} link="/hello-world-flutter-app"/>
            </div>

            <div className="blog-post-row">
                <BlogPostContainer title="Artificial Intelligence" subtitle="Will Artificial Intelligence prove to be a problem in future for Humans" imgSrc={AI} link="/artificial-intelligence"/>
            </div>
        </div>
    );
}

export default Posts;