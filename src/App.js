import React from 'react';
import './App.css';
import BlogPosts from './components/post-preview/post-previews.unit';
import {Switch,Route} from "react-router-dom";
import PostPage from './pages/post_page';
import NavbarUnit from './components/navbar/navbar.unit';

import Container from 'react-bootstrap/Container'

function App() {
  /* console.log(Posts) */
  return (
    <div className="App">
      <NavbarUnit />
      <Container className="d-flex justify-content-center align-items-center text-center">
        <Switch>
          <Route exact path="/" component={BlogPosts} />
          <Route path="/blog/:id" component={PostPage} />
        </Switch> 
      </Container>
    </div>
  );
}

export default App;
