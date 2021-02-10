import React from "react";
import "../style/blogPostContainer.css";

function BlogPostContainer(props){

    // const colors = ["red","purple","blue","green","orange", "yellow","aqua","aquamarine","blueviolet","brown"];

    // const clrSelec = () => {
    //     return colors[Math.floor(Math.random() * colors.length)];
    // }

    // const newClr = clrSelec();

    return(
       <div className="container-outline" >
           <div className="thumbnail-img">
               <div className="img">
                   <img className="thumbnail" src={props.imgSrc} alt="" srcset=""/>
               </div>
           </div>
           <div className="post-content-data">
               <h2 className="title">{props.title}</h2>
               <p className="subtitle">{props.subtitle}</p>
               <div className="read-more-button" >
                    <button className="post-link" onClick={function(){
                        window.open(props.link, "_self")
                    }} >Read More</button>
                </div>
           </div>
       </div>
    );
}

export default BlogPostContainer;