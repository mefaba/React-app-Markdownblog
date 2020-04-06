import React from 'react';
import './App.css';
import BlogPosts from './components/post-preview/post-previews.unit';

import {Switch,Route} from "react-router-dom";
import PostPage from './pages/post_page';

function App() {
  /* console.log(Posts) */
  return (
    <div className="App App-header">
      <Switch>
        <Route exact path="/" component={BlogPosts} />
        <Route path="/blog/:id" component={PostPage} />
      </Switch> 
    </div>
  );
}

export default App;
