import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ""
    };
  }

  commentHandler = e => {
    console.log(e.target.value);
    this.setState({ comment: e.target.value });
  };

  addNewComment = e => {
    e.preventDefault();
    const newComment = {
      username: "sharanjitsandhu",
      text: this.state.comment
    };
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({ comments, comment: "" });
  };

  render() {
    return (
      <div>
        {this.state.comments.map((comment, i) => (
          <Comment comment={comment} key={i} />
        ))}
        <CommentInput
          comment={this.state.comment}
          changeComment={this.commentHandler}
          submitComment={this.addNewComment}
        />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;
