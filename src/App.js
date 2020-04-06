import React from 'react';
import './App.css';
import BlogPosts from './components/blog-posts.unit';

import {Switch,Route,Link} from "react-router-dom";

function App() {
  /* console.log(Posts) */
  return (
    <div className="App">
      <header className="App-header">
        <Route path="/" component={BlogPosts} />
      
      </header>
      
    </div>
  );
}

export default App;
