import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import * as Yup from "yup";
import { useProtectedPage } from "../../hooks/useProtectPage";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";

function FeedPage() {
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
  console.log(posts);
  const PostForm = () => {
    const post = (values) => {
      const body = values;
      const token = window.localStorage.getItem("token");
      axios
        .post(
          "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts",
          body,
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((res) => {
          alert("Postagem feita com sucesso!");
        })
        .catch((err) => {
          alert("Erro: Usuário não encontrado");
        });
    };
    const formik = useFormik({
      initialValues: {
        title: "",
        text: "",
      },
      validationSchema: Yup.object({
        title: Yup.string()
          .max(20, "Deve ter no máximo 200 caracteres")
          .min(4, "Deve ter no mínimo 20 caracteres"),
        text: Yup.string()
          .max(200, "Deve ter no máximo 200 caracteres")
          .min(3, "Deve ter no mínimo 20 caracteres"),
      }),
      onSubmit: (values) => {
        post(values);
      },
    });
    return (
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            id="title"
            name="title"
            type="title"
            placeholder="Título"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? (
            <div>{formik.errors.title}</div>
          ) : null}
        </div>
        <div>
          <input
            id="text"
            name="text"
            type="text"
            placeholder="Escreva aqui sua postagem"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.text}
          />
          {formik.touched.text && formik.errors.text ? (
            <div>{formik.errors.text}</div>
          ) : null}
        </div>
        <div>
          <button type="submit">Postar</button>
        </div>
      </form>
    );
  };

  const listPost = posts.map((post) => {
    return (
      <div>
        <div> Autor: {post.username}</div>
        <div>Texto:{post.text}</div>
      </div>
    );
  });
  return (
    <Container>
      <div>Feed Page</div>
      <PostForm />
      {listPost}
    </Container>
  );
}

export default FeedPage;
