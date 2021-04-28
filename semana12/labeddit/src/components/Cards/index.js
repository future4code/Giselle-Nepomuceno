import React, { useEffect, useState } from "react";
import {
  Container,
  PostBox,
  PostsField,
  UserContent,
  VoteContent,
} from "./styles";
import { useProtectedPage } from "../../hooks/useProtectPage";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Cards() {
  const history = useHistory();
  useProtectedPage();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);
  const getPosts = () => {
    const token = window.localStorage.getItem("token");
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts",
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        setPosts(res.data.posts);
        console.log(res.data.posts);
      })
      .catch((err) => {
        alert("Erro ao fazer requisição");
      });
  };

  const listPost = posts.map((post) => {
    return (
      <PostBox>
        <UserContent> Autor: {post.username}</UserContent>
        <div>
          Titulo:<strong>{post.title}</strong>
        </div>
        <div>Texto:{post.text}</div>
        <VoteContent>Votes</VoteContent>
      </PostBox>
    );
  });
  return (
    <Container>
      <div>Cards </div>
      <PostsField>{listPost}</PostsField>
    </Container>
  );
}

export default Cards;
