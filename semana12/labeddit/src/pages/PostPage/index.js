import React, { useState, useEffect } from "react";
import { useProtectedPage } from "../../hooks/useProtectPage";
import { useHistory, useParams } from "react-router-dom";
import {
  PostBox,
  UserContent,
  VoteContent,
  Container,
  Field,
  InputComment,
  Button,
} from "./styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

function PostPage() {
  useProtectedPage();
  const history = useHistory();
  const params = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    getPostDetails();
  }, []);

  const getPostDetails = () => {
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
        // console.log(res.data.post);
        setPost(res.data.post);
      })
      .catch((err) => {
        // console.log(err);
        alert("Erro ao fazer requisição dos detalhes");
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
      })
      .catch((err) => {
        alert("Erro ao tentar fazer requisição de votos");
      });
  };
  const voteComment = (id, commentId, vote) => {
    const token = window.localStorage.getItem("token");
    const body = { direction: vote };
    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/comment/${commentId}/vote
        `,
        body,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        alert("Voto efeutado com sucesso");
        getPostDetails();
      })
      .catch((err) => {
        alert("Erro ao tentar fazer requisição de votos");
      });
  };

  const CommentForm = () => {
    const postComment = (values, id) => {
      const body = { text: values.comment };
      const token = window.localStorage.getItem("token");
      axios
        .post(
          `https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/comment`,
          body,
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((res) => {
          alert("Comentário feito com sucesso!");
          getPostDetails();
        })
        .catch((err) => {
          alert(
            err,
            "Erro: Requisição nao enviará, tente novamente mais tarde"
          );
        });
    };
    const formik = useFormik({
      initialValues: {
        comment: "",
      },
      validationSchema: Yup.object({
        comment: Yup.string()
          .max(200, "Deve ter no máximo 200 caracteres")
          .min(3, "Deve ter no mínimo 3 caracteres"),
      }),

      onSubmit: (values) => {
        postComment(values, post.id);
      },
    });
    return (
      <form onSubmit={formik.handleSubmit}>
        <Field>
          <InputComment
            id="comment"
            name="comment"
            type="comment"
            placeholder="Escreva aqui sua postagem"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.comment}
          />
          {formik.touched.comment && formik.errors.comment ? (
            <div>{formik.errors.comment}</div>
          ) : null}
          <Button type="submit" disabled={!(formik.isValid && formik.dirty)}>
            Comentar
          </Button>
        </Field>
      </form>
    );
  };
  const listComments =
    post.comments &&
    post.comments.map((comment) => {
      console.log(comment.text);
      return (
        <PostBox key={comment.id}>
          <UserContent> Autor: {comment.username}</UserContent>
          <div>Texto:{comment.text}</div>
          <VoteContent>
            <button onClick={() => voteComment(post.id, comment.id, 1)}>
              V
            </button>
            {comment.votesCount}
            <button onClick={() => voteComment(post.id, comment.id, -1)}>
              X
            </button>
            comentarios:
          </VoteContent>
        </PostBox>
      );
    });

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
      <div>
        <CommentForm />
      </div>
      <div>{listComments}</div>
    </Container>
  );
}

export default PostPage;
