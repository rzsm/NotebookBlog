import React, { Component } from "react";
import Comments from "./Comments";
import Post from "./Post";

export default function Content(props) {
  
  return (
    <div className="container">
      <Post posts={props.posts} activePostIndex={props.activePostIndex}/>
      <Comments activePostIndex={props.activePostIndex}/>
    </div>
  );
}
