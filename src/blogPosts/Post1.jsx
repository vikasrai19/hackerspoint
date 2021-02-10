import React from "react";
import PostHeader from "../components/postsComponents/PostHeader.jsx";
import PostSubHeader from "../components/postsComponents/PostSubHeader.jsx";
import PostContent from "../components/postsComponents/PostContent.jsx";
import "../style/postDetails.css";
import Matrix from "../assets/Post1/matrix.png";
import PostImage from "../components/postsComponents/PostImage.jsx";
import PostList from "../components/postsComponents/PostList.jsx";
import PostLinkButton from "../components/postsComponents/PostLinkButton.jsx";
import PostSpacer from "../components/postsComponents/PostSpacer.jsx";
import firebase from "firebase";
import Adsense from "react-adsense";
import Helmet from "react-helmet";

function Post1(){

    firebase.analytics().logEvent('Intro to termux');

    const para1 = "Hello guys. Welcome to my new blog post. In this post I am going to teach you the basics of Termux App. You can install this app from Google Playtore or click here to download the app directly.";

    const para2 = "Termux is a android emulator app which is used to run Linux Commands in android device and it works directly with the system without the system being rooted. A minimal base system is installed automatically and the aditional packages are available using APT package manager."

    const featuresList = [
        "Secure: Access remote servers using the ssh client from OpenSSH. Termux combines standard packages with accurate terminal emulation in a beautiful open source solution.",
        "Feature packed: Take your pick between Bash, fish or Zsh and nano, Emacs or Vim. Grep through your SMS inbox. Access API endpoints with curl and use rsync to store backups of your contact list on a remote server.",
        "Customizable: Install what you want through the APT package management system known from Debian and Ubuntu GNU/Linux.",
        "Explorable: Have you ever sat on a bus and wondered exactly which arguments tar accepts? Packages available in Termux are the same as those on Mac and Linux - install man pages on your phone and read them in one session while experimenting with them in another.",
        "With batteries included: Can you imagine a more powerful yet elegant pocket calculator than a readline-powered Python console? Up-to-date versions of Perl, Python, Ruby and Node.js are all available.",
        "Ready to scale up: Connect a Bluetooth keyboard and hook up your device to an external display if you need to - Termux supports keyboard shortcuts and has full mouse support.",
        "Tinkerable: Develop by compiling C files with Clang and build your own projects with CMake and pkg-config. Both GDB and strace are available if you get stuck and need to debug."
    ];

    const para3 = "The basic terminal commands that are useful in termux app while working are as follows."

    const commandList = [
        "ls - [List Files and Directories] This command is used to list the contents of the present working directory.",
        "cd - [Change Directory] This command is used to move from one directory to another in the forward direction.",
        "mkdir - [Make Directory] This command is used to create a new directory of folder in the present working directory.",
        "cd .. - [Change Directory Previous] This command is used to move to previous directory." ,
        "clear - This command is used to clear the terminal screen after some operations.",
        "rm - [Remove] This command is used to delete a file or directory in the working directory.",
        "cp - [Copy] This command is used to make a copy of a file.",
        "mv - [Move] This command is used to move a file from one directory to another directory"
    ];

    return(
        <div className="post-container">
            <Helmet>
                <title>Intro to termux</title>
                <meta name="description" content="Complete tour in android hacking terminal app Termux." />
            </Helmet>
            <PostHeader text="Intro To Termux" />
            <PostImage imgSrc={Matrix} />
            <PostContent text={para1} />
            <PostLinkButton btnName="Download App" link="https://play.google.com/store/apps/details?id=com.termux" />
            <PostSpacer />
            <Adsense.Google 
            className="adsbygoogle"
            client="ca-pub-1942646706163703"
            slot="5730416206"
            format="auto"
            responsive="true"
            style={{display:'block'}}
            />
            <PostSubHeader text="Termux" />
            <PostContent text={para2} />
            <PostList list={featuresList} />
            <PostSpacer />
            <Adsense.Google 
            className="adsbygoogle"
            client="ca-pub-1942646706163703"
            slot="5730416206"
            format="auto"
            responsive="true"
            style={{display:'block'}}
            />
            <PostSubHeader text="Basic Termux Commands" />
            <PostContent text={para3} />
            <PostList list={commandList} />
        </div>
    );
}

export default Post1;