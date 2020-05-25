import React, { useEffect } from 'react';
import './App.css';
import BlogPosts from './components/post-preview/post-previews.unit';
import {Switch,Route, Redirect} from "react-router-dom";
import PostPage from './pages/post_page';
import NavbarUnit from './components/navbar/navbar.unit';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
const App = ()  => {
  /* console.log(Posts) */
  useEffect(()=>{
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  })

  return (
    <div className="App">
      <Container>
        <NavbarUnit />
        <Row className="d-flex justify-content-center">
          <Switch>
            <Route exact path="/" component={BlogPosts} />
            <Route path="/blog/:id" component={PostPage} />
            <Route path="/admin"><Redirect to="/admin"/></Route>
          </Switch> 
        </Row>
      </Container>
    </div>
  );
}

export default App;
/* className="d-flex justify-content-center align-items-center text-center" */