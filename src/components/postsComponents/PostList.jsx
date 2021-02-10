import React from "react";

function PostList(props){
    const listElements = [];
    for(let lst of props.list){
        listElements.push(<p>{lst}</p>)
    }
    return listElements;
}

export default PostList;