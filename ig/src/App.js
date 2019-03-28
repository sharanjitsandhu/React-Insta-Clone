// import React, { Component } from "react";
// import dummyData from "./dummy-data";
// import "./App.css";
// import SearchBar from "./components/SeachBar/SearchBar";
// import PostContainer from "./components/PostContainer/PostContainer";
// import { Route } from "react-router-dom";
// import Home from "../src/components/Home";
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       posts: []
//     };
//   }
//   componentDidMount() {
//     this.setState({ posts: dummyData });
//   }

//   render() {
//     return (
//       <div className="App">
//         <SearchBar />
//         <PostContainer posts={this.state.posts} />
//         <Route exact path="/" component={Home} />
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "../src/components/Home";
import Login from "./components/Login/Login";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </div>
    );
  }
}

export default App;
