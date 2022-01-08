import React from "react";

export default function PostLink(props) {
  return <li onClick={(e) => props.setPost(props.index)}> {props.posts.title} </li>;
}
