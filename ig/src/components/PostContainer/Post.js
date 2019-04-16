//using hooks in this file
import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSection";
import PostHeader from "./PostHeader";

import "./PostContainer.css";

const Post = props => {
  const [count, setCount] = useState(10);
  const increment = () => setCount(count + 1);

  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />

      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
        <div className="fafa">
          {/* <i className="far fa-heart" onClick={() => setCount(count + 1)} /> */}
          <i className="far fa-heart fafa-icons" onClick={increment} />
          <i className="far fa-comment-alt fafa-icons" />
        </div>
        <p className="incremented-likes">{count} likes</p>
      </div>
      <CommentSection comments={props.post.comments} />
    </div>
  );
};

export default Post;
