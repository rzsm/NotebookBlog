import React from "react";
import PostLink from "./PostLink";

export default function Aside(props) {
  if (props.posts) {
    let links = props.posts.map((post,index) => <PostLink posts={post} key={post.id} setActivePost={props.setActivePost} index={index}/>);
    // console.log(links);
    return (
      <aside>
        <ul>{links}</ul>
      </aside>
    );
  }

  return <></>;
}
