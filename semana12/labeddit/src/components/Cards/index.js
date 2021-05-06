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
    getPost();
  }, []);

  const getPost = () => {
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
        history.push("/feed");
      })
      .catch((err) => {
        alert("Erro ao fazer requisição");
      });
  };

  const votePost = (id, vote) => {
    const token = window.localStorage.getItem("token");
    const body = { direction: vote };
    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/vote`,
        body,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        alert("Voto efeutado com sucesso");
        getPost();
      })
      .catch((err) => {
        alert("Erro ao tentar fazer requisição");
      });
  };
  const goToPostPage = (id) => {
    history.push(`/post/${id}`);
  };
  const listPost = posts.map((post) => {
    return (
      <PostBox onClick={() => goToPostPage(post.id)}>
        <UserContent> Autor: {post.username}</UserContent>
        <div>
          Titulo:<strong>{post.title}</strong>
        </div>
        <div>Texto:{post.text}</div>
        <VoteContent>
          <button onClick={() => votePost(post.id, 1)}>V</button>
          {post.votesCount}
          <button onClick={() => votePost(post.id, -1)}>X</button>
          comentarios: {post.commentsCount}
        </VoteContent>
      </PostBox>
    );
  });
  return (
    <Container>
      <PostsField>{listPost}</PostsField>
    </Container>
  );
}

export default Cards;
