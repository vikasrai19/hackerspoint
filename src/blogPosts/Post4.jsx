import React from "react";
import "../style/postDetails.css";
import PostHeader from "../components/postsComponents/PostHeader";
import PostContent from "../components/postsComponents/PostContent";
import PostSubHeader from "../components/postsComponents/PostSubHeader";
import PostImage from "../components/postsComponents/PostImage";
import firebase from "firebase";
import AI from "../assets/Post4/ai.jpeg";
import Helmet from "react-helmet";

export default function Post4(){

    firebase.analytics().logEvent('artificial intelligence');

    const para1 = "Hello guys. Welcome back to my new blog post. In this post we are going to talk about Artificial Intelligence. AI or artificial intelligence is trying to take over the world. Most of the apps and devices that we use today are powered by Artificial Intelligence. It is growing as a new part of technology.";
    const para2 = "Apps and devices that use AI can really do the jobs for us. Some of the famoous AI apps and devices that we use in ourdat-to-day life are 'Google Assistant', 'Siri', 'Alexa', and many more. Most of the Google apps are supported by AI technology to make apps user friend. These apps have a lot of features and can do all sorts of tasks for us. And the main thing about them is they adapt to our living styles. Nowadays AI are more developed and can be dangerous to humanity if they are left free because they can gain more intelligence than humans being which can really be a huge problem in the future.";	
	const para3 = "There are always positive and negative sides for all the things in this universe. This is how life works. As we can see there are both cons and pros in AI.We can analyze our selves about the pros and cons and decide is it worth using AI in all possible ways. For eg. AI robots can replace people in many working sectors, leading many people unemployed. There are also lot more problems occurred by more usage of AI's. I am not against developing AI's, but according to me it should be developed only to places where it is required. For ex, 'Google Asssistants' can be used as personal secretary, for people like me, because it does some works like reminding tasks, and also gets most of the job done very easily and quickly.";
	const para4 = "Google Assistant was developed by Google  as a artificial intelligence powered  virtual assistant that is primarily available on smartphones and smart home devices. It was initially debuted in May 2016 as a part of Allo, a Google Messaging App and Google Home, a voice activated speaker. After gaining some popularities in Pixel and Pixel XL smartphones, it began to deploy in other android smartphones as well, from February 2017. Users primarily interact with Google Assistant using natural voice. It also has a keyboard support. Now the Google Assistant is able to reach the internet, schedule events and alarms, adjust hardware settings on users devices and many more things. Google has already announced that the Assistant will be able to identify objects as well as gather visual information uusing device camera.";
	const para5 = "Siri is virtual assistant that is a part of Apple Inc's IPadOS, watchOS, macOS, IOS and tvOs operating systems. The assistant uses voice quries, gesture based control, focus-tracking and a natural language user interface to answer questions, make recommendations, and perform some actions to a set of internet services. Siri is a spin-off from a project originally developed by the SRI International Artificial Intelligence Center. Its speech recognition engine was provided by Nuance Communications, and Siri uses advanced machine learning technologies to function. Its original American, British, and Australian voice actors recorded their respective voices around 2005, unaware of recordings' eventual usage in Siri. Siri supports a wide range of user commands, including performing phone actions, checking basic information, scheduling events and reminders, handling device settings, searching the Internet, navigating areas, finding information on entertainment, and is able to engage with iOS-integrated apps. With the release of iOS 10 in 2016, Apple opened up limited third-party access to Siri, including third-party messaging apps, as well as payments, ride-sharing, and Internet calling apps. With the release of iOS 11.";
	const para6 = "Finnaly the concluding part. What I would like to say is that AI's are important in our lives in many ways. But it should be used in such a way that it doesnot pose any harm to the society and also others. More usage of AI's in workplace may lead to mmany problems like unemployment leading to lot of problems. This system is a chain and will affect everyone. IE for examples, if the waiters (server) in hotels are replaced by robots, then it will lead to unemployment of those people resulting in a huge loss.";

    return(
	    <div className="post-container">
            <Helmet>
                <title>
                    Artificial Intelligence
                </title>
                <meta name="description" content="blog post on Artificial Intelligence and its problems to mankind." />
            </Helmet>
            <PostHeader text="Artificial Intelligence" />
            <PostImage imgSrc={AI} />
            <PostContent text={para1} />
	    <PostContent text={para2} />
	    <PostContent text={para3} />
	    <PostSubHeader text={"Google Assistant"} />
		    <PostImage imgSrc="https://images.squarespace-cdn.com/content/v1/59937b8f2994cae8c280ca6c/1543349932389-4XZZQZRMOY8DASVR6965/ke17ZwdGBToddI8pDm48kKm5kEwr7jImNoUCRzDBtBBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxmgbnfBk2C__lsZxmKmp0Uq0IwcExHtlXeZMIMB5UDeaoruQ8pahX8ViMixsCYklY/Yonomi+-+Google+Assistant+Logo.png" />
	    {/* Google Assistant Pic Goes Here*/}
	    <PostContent text={para4} />
		    <PostSubHeader text="Apple Siri" />
		    <PostImage imgSrc="https://library.kissclipart.com/20180921/wfq/kissclipart-siri-logo-in-png-clipart-siri-apple-27686357f98cce98.png" />
		    <PostContent text={para5} />
		    <PostSubHeader text="Conclusion" />
		    <PostContent text={para6} />
        </div>
    );
}
