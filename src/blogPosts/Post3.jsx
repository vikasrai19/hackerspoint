import React from "react";
import "../style/postDetails.css";
import PostHeader from "../components/postsComponents/PostHeader";
import PostContent from "../components/postsComponents/PostContent";
import PostImage from "../components/postsComponents/PostImage";
import PostLinkButton from "../components/postsComponents/PostLinkButton";
import PostCode from "../components/postsComponents/PostCode";
import firebase from "firebase";
import Adsense from "react-adsense";
import Helmet from "react-helmet";

export default function Post3() {

    firebase.analytics().logEvent('Hello World Using Flutter');
    console.log("Hello world")

    const img1 = "https://github.com/vikasrai1906/HackersPointPosts/blob/main/Post3/hello.png?raw=true";

    const para1 = "Hello Guys. In this Post we are going to build a Hello World Android App using Flutter Framework. We have already seen how to setup and install all the reqired things for flutter framework. If you haven't read it, click on the link below and check it out.";

    const para2 = "So lets start building our first Hello World App using Flutter. Let's start by creating a new Flutter project. Head on to the directory where you want to save your project and open the terminal. We will be using terminal for most of the jobs in this post. You can even use IDE's to create a new flutter projects. The IDE we will be using is VS CODE. Just type the following command in the terminal and the project will be ready in few seconds.";

    const para3 = "Once the project is generated type the following commands to open the entire project in VS CODE IDE.";

    const para4 = "If you haven't setup your VS CODE for flutter, then you can read this post on how to setup VS CODE IDE for Flutter App Development.Let's continue on building our hello world application.After opening the project section in the IDE, the code structure looks similar to this.";

    const para5 = "Now lets delete all the code present in the main.dart file and replace the code with the following code.";

    const para6 = "Congrats! You have successfully written the code to display Hello World in your app. Lets Run this app and check if there is any error in the app. To run the app connect your phone or AVD. To run the app, type the following command.";

    const para7 = "Hurray! You have successfully built and run your first flutter android app. Now you are ready to develop your flutter projects.";

    const helloWorldCode = [
        "import 'package:flutter/material.dart;",
        "void main() => runApp(MyApp());",
        "class MyApp extends StatelessWiget{",
        "@override",
        "Widget build(BuildContext context){",
        "return MatrialApp(",
        "title:'Hello World'",
        "home:HomePage()",
        "); //MaterialApp",
        "}",
        "}",
        <br />,
    ];

    const helloWorldHomePage = [
        "class HomePage extends StatelessWidget{",
        "@override",
        "Widget build(BuildContext context){",
        "return Scaffold(",
        "appBar:AppBar(",
        "title: Text(",
        "Hello World",
        "), //text",
        "),//AppBar",
        "body:Center(",
        "child: Text(",
        "Hello World",
        "),//Text",
        "), //Center",
        ");",
        "}",
        "}"
    ]

    return (
        <div className="post-container">
            <Helmet>
                <title>Hello World Flutter App</title>
                <meta name="description" content="Building hello world android app using Flutter Framework. Flutter tutorial for absolute beginners." />
                <meta name="keywords" content="hello world app, flutter tutorial, how to create flutter apps, hello world app in flutter,how to, how to create apps in flutter" />
            </Helmet>
            <PostHeader text="Hello World Flutter App" />
            {/* <PostImage imgSrc={Hello} /> */}
            <PostImage imgSrc={img1} />
            <PostContent text={para1} />
            <PostLinkButton btnName="Setting Up Flutter In Ubuntu" link="/setting-up-flutter-in-ubuntu" />
            <PostContent text={para2} />
            <PostCode list={["&nbspflutter create <project_name>"]} />
            <Adsense.Google
                className="adsbygoogle"
                client="ca-pub-1942646706163703"
                slot="5730416206"
                format="auto"
                responsive="true"
                style={{ display: 'block' }}
            />
            {/* Image of terminal goes here */}
            <PostContent text={para3} />
            <PostCode list={["cd <project_name>", "code ."]} />
            {/* Image of vs code goes here */}
            <PostLinkButton btnName="Setting Up VS CODE for Flutter" link="#" />
            <PostContent text={para4} />
            {/* Images of code structure in vs code goes here */}
            <PostContent text={para5} />

            {/* Ads goes here */}
            <Adsense.Google
                className="adsbygoogle"
                client="ca-pub-1942646706163703"
                slot="5730416206"
                format="auto"
                responsive="true"
                style={{ display: 'block' }}
            />

            <PostCode list={helloWorldCode} />
            <PostContent text="Now lets write the code for our Homepage to display Hello World when our app runs." />
            <PostCode list={helloWorldHomePage} />
            <PostContent text={para6} />
            <PostCode list={["flutter run"]} />
            {/* App Output image goes here */}
            <PostContent text={para7} />
        </div>
    );
}
