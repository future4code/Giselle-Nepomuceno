import React, { useState, useEffect } from "react";
import { useProtectedPage } from "../../hooks/useProtectPage";
import { useHistory, useParams } from "react-router-dom";
import { PostBox, UserContent, VoteContent, Container } from "./styles";
import axios from "axios";

function PostPage() {
  useProtectedPage();
  const history = useHistory();
  const params = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = () => {
    const token = window.localStorage.getItem("token");
    axios
      .get(
        ` https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${params.id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        setPost(res.data.post);
        console.log(res.data.post);
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
        alert("Erro ao tentar fazer requisição de votos");
      });
  };

  return (
    <Container>
      <h2>Post Page</h2>
      <PostBox>
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
    </Container>
  );
}

export default PostPage;
