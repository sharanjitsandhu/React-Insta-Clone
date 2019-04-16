import React, { Component } from "react";
import dummyData from "../dummy-data";
import "../App.css";
import SearchBar from "./SeachBar/SearchBar";
import PostContainer from "./PostContainer/PostContainer";
class Home extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      searchPosts: []
    };
  }
  componentDidMount() {
    this.setState({ posts: dummyData });
  }
  searchPostsHandler = e => {
    const posts = this.state.posts.filter(post => {
      if (post.username.includes(e.target.value)) {
        return post;
      }
    });
    this.setState({ searchPosts: posts });
  };

  render() {
    return (
      <div className="App">
        <SearchBar searchPosts={this.searchPostsHandler} />
        <PostContainer
          posts={
            this.state.searchPosts.length > 0
              ? this.state.searchPosts
              : this.state.posts
          }
        />
        {/* <PostContainer posts={this.state.posts} /> */}
      </div>
    );
  }
}

export default Home;
