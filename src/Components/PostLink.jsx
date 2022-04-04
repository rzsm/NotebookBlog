import React from "react";

export default function PostLink(props) {
  return <li onClick={(e) => {
    props.setActivePost(props.index);
    console.log(props.index)
  }}> 
    {props.posts.title} 
    </li>;
}
