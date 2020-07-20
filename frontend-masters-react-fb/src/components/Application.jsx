import React, { Component } from "react";
// importing collectIdsAndDocs from your utilities file
import "../utilities"; 

// import the firesstore
import { firestore } from "../firebase";

import Posts from "./Posts";
import { collectIdsAndDocs } from "../utilities";

class Application extends Component {
  state = {
    posts: [
  };

  // the majority of firestore is promised based, that's where .dot then comes in
  // it executes the listed functions when the value in the promise is updated.
  // ie, .then((snapshot) => console.log(snapshot));
  //
  // But we've actually refactored to async await syntax, es2017 but we're using babel so okay
  componentDidMount = async () => {
    const snapshot = await firestore.collection("posts").get(); // returns an object

    // A forEach Example
    // snapshot.forEach((doc) => {
    //   const id = doc.id;
    //   const data = doc.data();

    //   console.log({ id, data });
    // });

    // .docs returns an array...

    const posts = snapshot.docs.map(collectIdsAndDocs);

    console.log({ posts }); // aka QuerySnapshot
    this.setState({ posts });
  };

  handleCreate = (post) => {
    const { posts } = this.state;
    this.setState({ posts: [post, ...posts] });
  };

  render() {
    const { posts } = this.state;

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Posts posts={posts} onCreate={this.handleCreate} />
      </main>
    );
  }
}

export default Application;
