import React from "react";
import PostHeader from "../components/postsComponents/PostHeader.jsx";
import PostSubHeader from "../components/postsComponents/PostSubHeader.jsx";
import PostContent from "../components/postsComponents/PostContent.jsx";
import "../style/postDetails.css";
import Flutter from "../assets/Post2/flutter.png";
import PostImage from "../components/postsComponents/PostImage.jsx";
import Dart from "../assets/Post2/dart.png";
import PostList from "../components/postsComponents/PostList.jsx";
import PostLinkButton from "../components/postsComponents/PostLinkButton.jsx";
import PostSpacer from "../components/postsComponents/PostSpacer.jsx";
import PostCode from "../components/postsComponents/PostCode.jsx";
import firebase from "firebase";
import Adsense from "react-adsense";
import Helmet from "react-helmet";

function Post2(){

    firebase.analytics().logEvent("Setting up flutter in ubuntu")

    const para1 = "Hello Guys. In this post I am going to teach you how to setup Flutter in Ubuntu to develop android app. In this is post we are going to build 'Hello world' app as a basic tutorial.";
    
    const para2 = "Flutter is a open source UI Software development kit created by Google. It is used to develop applications for Android, IOS, Linux, Mac, Windows, Google Fushcia, and the web from a single codebase. The first version of Flutter was known as codename 'Sky' and rab on Android Operation System.";

    const para3 = "We can develop more interesting and eye catching UI designs very quickly with flutter. The popularity for flutter has been rising from the past few years and is based on 'Dart' Programming Language. There is a good community support in case of any issues and there has been a lot of features and packages being added to Flutter, which makes developing complex App and UI very easy and interesting.";

    const para4 = "Dart is a client-side programming language for apps on multiple platforms. It is developed by Google and is used to build mobile, desktop, server and web applications. Dart is an object oriented, class-based garbage-collected language with C-style syntax. Dart can compile to either native code or Javascript. It supports interfaces, abstract classes, reified generics and type interfaces.";

    const para5 = "Linux provides many ways of installing Flutter SDK. The easiest way of installing flutter is using Snap Store. Snap store is just like the play store of Linux distros. We can install any app using snap store with just a single command.";

    const para6 = "Lest first install snap store in our linux distro using the following commmand."
    const snapd = [
        "sudo apt-get upgrade && sudo apt-get update -y",
        "sudo apt-get install snapd -y"
    ];

    const sysReq = [
        "Operating System : Linux (64 bit)",
        "Disk Space : 600MB",
    ];

    const para7 = "The first command is used to upgrade and update all the packages present in out linux distros. It is mandatory to run the command so that all the packages are upgraded and up-to-date to use. We can even skip the first line as it is not compulsory to run everytime. The second command is used to install snap store package so that we can use snap store using pour linux terminal and install the required apps."

    const para8 = "To install Flutter using Snap Store, just open the terminal and paste the following command and the flutter SDK will be installed automatically";

    const para9 = "The second way of installing Flutter is completely manual. You can click on the below button to download the Flutter SDK tar.xz file and then extract it into desired path.";

    const flutterSdkPath = "https://storage.googleapis.com/flutter_infra/releases/stable/linux/flutter_linux_1.22.5-stable.tar.xz";

    const para10 = "The next method of insalling Flutter SDK is using Git. Just clone the repository and then then add flutter to path. To clone flutter repo, paste the followiing command in the linux terminal";

    const git = [
        "// To install git, if git is not installed in the system",
        "sudo apt-get install git  ",
        "// To clone the flutter repo into your system.",
        "git clone https://github.com/flutter/flutter.git -b stable --depth 1"
    ]

    const para11 = "After extracting the Flutter SDK file, you need to add it to the path variable, so that it can be accessed any where easily. To add Flutter SDK into your path variable, paste the following command in your linux terminal";

    const para12 = "Then you can run 'flutter doctor -v' to check if the flutter SDK has been installed properly or not.";

    const para13 = "Next we need to donwload and install Android Studio IDE for app developmen. After downloading and installing the android studio, we need to setup an AVD to check the output of the app while debugging. Flutter has a fast reload option which makes app deisgning and debugging really fast. We can even use our android physical device inspite of AVD."; 

    const avd = [
        "Enable VM acceleration on your machine.",
        "Launch Android Studio, click the AVD Manager icon, and select Create Virtual Device… In older versions of Android Studio, you should instead launch Android Studio > Tools > Android > AVD Manager and select Create Virtual Device…. (The Android submenu is only present when inside an Android project.)If you do not have a project open, you can choose Configure > AVD Manager and select Create Virtual Device…",
        "Choose a device definition and select Next.",
        "Select one or more system images for the Android versions you want to emulate, and select Next. An x86 or x86_64 image is recommended.",
        "Under Emulated Performance, select Hardware - GLES 2.0 to enable hardware acceleration.",
        "Verify the AVD configuration is correct, and select Finish.",
        "In Android Virtual Device Manager, click Run in the toolbar. The emulator starts up and displays the default canvas for your selected OS version and device."
    ];

    const para14 = "After completing all the above steps correctly, now you are ready to create your first Flutter project. To create a new flutter project you can run the following command in the directory you want to save the project";
    
    const para15 = "This command creates and builds all the packages that are required to build the android app. After the execution completes, now you are ready with the pre-defined template of the flutter app that is created wverytime when a new flutter project is created. To check the output of the app, you can connect your android physical device to your system using a USB cable or you can use AVD. Just run the following command in the root directory of your project";

    return(
        <div className="post-container">
            <Helmet>
                <title>Setting Up Flutter In Ubuntu</title>
                <meta name="description" content="A quick guide on how to install flutter framework in ubuntu." />
            </Helmet>
            <PostHeader text="Setting Up Flutter In Ubuntu" />
            <PostImage imgSrc={Flutter} />
            <PostContent text={para1} />
            <PostSpacer />
            <PostSubHeader text="Flutter" />
            <PostContent text={para2} />
            <PostContent text={para3} />
            <Adsense.Google 
            className="adsbygoogle"
            client="ca-pub-1942646706163703"
            slot="5730416206"
            format="auto"
            responsive="true"
            style={{display:'block'}}
            />
            <PostSpacer />
            <PostSubHeader text="Dart" />
            <PostImage imgSrc={Dart} />
            <PostContent text={para4} />
            <PostSpacer />
            <PostSpacer />
            <PostSubHeader text="Installing Flutter In Ubuntu" />
            <PostContent text="System Requirments" />
            <PostList list={sysReq} />
            <PostContent text={para5} />
            <PostContent text={para6} />
            <PostCode list={snapd} />
            <PostContent text={para7} />
            <Adsense.Google 
            className="adsbygoogle"
            client="ca-pub-1942646706163703"
            slot="5730416206"
            format="auto"
            responsive="true"
            style={{display:'block'}}
            />
            <PostContent text={para8} />
            <PostCode list={["sudo snap install flutter --classic"]} />
            <PostContent text={para9} />
            <PostLinkButton btnName="Get Flutter SDK" link={flutterSdkPath} />
            <PostContent text="Then paste the following command to extract and install Flutter SDK." />
            <PostCode list={["cd ~/Downloads", "tar xf ~/Downloads/flutter_linux_1.22.5-stable.tar.xz"]} />
            <PostContent text={para10} />
            <PostCode list={git} />
            <PostContent text={para11} />
            <PostCode list={["export PATH=\"$PATH:`pwd`/flutter/bin\""]} />
            <PostContent text={para12} />
            <PostSpacer />
            <PostSubHeader text="Installing Android Studio IDE" />
            <PostContent text={para13} />
            <PostLinkButton btnName="Download Android Studio" link="https://developer.android.com/studio" />
            <PostSubHeader text="Setting Up AVD" />
            <PostList list={avd} />
            <PostContent text={para14} />
            <PostCode list={["flutter create <Project_Name>"]} />
            <PostContent text={para15} />
            <PostCode list={["flutter run"]} />
            <PostSpacer />
            <PostSubHeader text="App Output" />

            <PostLinkButton btnName="Hello world Flutter App" link="/hello-world-flutter-app" />
        </div>
    );
}

export default Post2;