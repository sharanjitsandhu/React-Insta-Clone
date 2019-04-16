import React from "react";

const CommentInput = props => {
  return (
    <form onSubmit={props.submitComment}>
      <input
        type="text"
        placeholder="Add a comment... "
        value={props.comment}
        onChange={props.changeComment}
        className="add-new-comment"
      />
    </form>
  );
};

export default CommentInput;
