import React from "react";

const CommentInput = props => {
  return (
    <form>
      <input type="text" placeholder="Add a comment..." />
      <button>Post</button>
    </form>
  );
};

export default CommentInput;
