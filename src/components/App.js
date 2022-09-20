import React from "react";
import blogData from "../data/blog";

// Import components
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList'

console.log(blogData);

//destructure blogData
const {name, image, about, posts} = blogData;

function App() {
  return (
    <div className="App">
      <Header name={name}/>
      <About image={image} about={about}/>
      <ArticleList posts={posts}/>
    </div>
  );
}

export default App;
