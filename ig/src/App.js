import React, { Component } from "react";
import dummyData from "./dummy-data";
import "./App.css";
import SearchBar from "./components/SeachBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      comment: ""
    };
  }
  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  render() {
    return (
      <div className="App">
        <SearchBar searchTerm={this.state.searchTerm} />
        <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
