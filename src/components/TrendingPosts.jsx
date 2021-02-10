import React from "react";
import TrendingPostCard from "../components/TrendingPostCard";
import Matrix from "../assets/Post1/matrix.png";
import "../style/trendingPosts.css";
import Flutter from "../assets/Post2/flutter.png";
import Hello from "../assets/Post3/hello.png";
import AI from "../assets/Post4/ai.jpeg";

function TrendingPosts(){

    return(
        <div className="trending-post-section">
            <div className="trending-title">
                <h2 className="title">Trending Posts</h2>
            </div>
            <div className="trending-posts">
                <div className="trending-post-row">
                    <TrendingPostCard title="Intro To Termux" imgSrc={Matrix} link="/intro-to-termux" />
                    <TrendingPostCard title="Setting Up Flutter In Ubuntu" imgSrc={Flutter} link="/setting-up-flutter-in-ubuntu" />
                    <TrendingPostCard title="Hello World Flutter App" imgSrc={Hello} link="/hello-world-flutter-app" />
                    <TrendingPostCard title="Artificial Intelligence" imgSrc={AI} link="/artificial-intelligence" />
                </div>
            </div>
        </div>
    );
}

export default TrendingPosts;