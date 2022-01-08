import React, { Component } from "react";
import Comment from "./Comment";

export default class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postComments: null,
    };
  }

  async getComments(postId) {
    const comments = await fetch(
      `http://localhost:3000/comments?post-id=${postId}`
    );

    return await comments.json();
  }

  componentDidMount() {
    this.getComments(1).then((data) => this.setState({ postComments: data }));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.posts) {
      if (
        prevProps.posts[prevProps.activePostIndex] !==
        this.props.posts[this.props.activePostIndex]
      ) {
        this.getComments(this.props.posts[this.props.activePostIndex].id).then(
          (data) => this.setState({ postComments: data })
        );
      }
    }
  }

  render() {
    if (this.state.postComments) {
      let commentELs = this.state.postComments.map((comment) => (
        <Comment data={comment} />
      ));
      return (
        <div className="comments">
          <p>Comments:</p>
          {commentELs}
        </div>
      );
    }
    return <></>;
  }
}
