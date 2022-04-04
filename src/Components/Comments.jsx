import React, { Component } from "react";
import Comment from "./Comment";
import postsData from "../db";

export default function Comments(props) {
  const [comments, setComments] = React.useState(postsData.comments);

  const postComments = comments.filter((comment) => {
    if (comment["post-id"] === props.activePostIndex + 1) {
      return comment;
    }
  });

  const commentElements = postComments.map((postComment) => (
    <Comment data={postComment} key={postComment.id} />
  ));

  return (
    <>
      {commentElements.length && <h4 className="comment-title">Comments: </h4>}
      {commentElements}
    </>
  );
}
