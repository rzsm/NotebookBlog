import React, { Component } from "react";
import Aside from "./Aside";
import Content from "./Content";
import postsData from "../db.js";

export default function Blog() {
  const [posts, setPosts] = React.useState(postsData.posts)
  const [activePostIndex, setActivePostIndex] = React.useState(0)

return (
      <>
        <Aside posts={posts} setActivePost={setActivePostIndex} />
        <Content
            posts={posts}
            activePostIndex={activePostIndex}
          />
      </>
    );
}

// export default class Blog extends Component {

//   constructor() {
//     super();
//     this.state = {
//       posts: null,
//       activePostIndex: 0,
//     };
//   }

//   async getPosts() {
//     const posts = await fetch("http://localhost:3000/posts");
//     return await posts.json();
//   }

//   componentDidMount() {
//     this.getPosts().then((data) => this.setState({ posts: data }));
//   }

//   setPost(index) {
//     this.setState({
//       ...this.state,
//       activePostIndex: index,
//     });
//   }
//   render() {
//     // console.log(this.state.posts);
//     return (
//       <>
//         <Aside posts={this.state.posts} setPost={this.setPost.bind(this)} />
//         <Content
//           posts={this.state.posts}
//           activePostIndex={this.state.activePostIndex}
//         />
//       </>
//     );
//   }
// }
