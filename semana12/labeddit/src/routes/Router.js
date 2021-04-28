import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import FeedPage from "../pages/FeedPage";
import PostPage from "../pages/PostPage";
import HomePage from "../pages/HomePage";
import SignUpPage from "../pages/SignUpPage";

// import { Container } from './styles';

function routes() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/feeds" exact component={FeedPage} />
        <Route path="/post" exact component={PostPage} />
        <Route path="/cadastro" exact component={SignUpPage} />
      </Switch>
    </div>
  );
}

export default routes;
