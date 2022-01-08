import React from "react";

export default function Post(props) {
  if (props.posts) {
    return (
      <div className="post">
        <img src={require(`../assets/${props.posts[props.activePostIndex].image}`)} />
        <h1>{props.posts[props.activePostIndex].title}</h1>
        <div>{props.posts[props.activePostIndex].body}</div>
      </div>
    );
  }

  return <></>;
}
