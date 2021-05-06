import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import FeedPage from "../pages/FeedPage";
import PostPage from "../pages/PostPage";
import HomePage from "../pages/HomePage";
import SignUpPage from "../pages/SignUpPage";
import ErrorPage from "../pages/ErrorPage";

// import { Container } from './styles';

function routes() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/feed" exact component={FeedPage} />
        <Route path="/post/:id" exact component={PostPage} />
        <Route path="/cadastro" exact component={SignUpPage} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default routes;
