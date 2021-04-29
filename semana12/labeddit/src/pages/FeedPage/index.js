import React from "react";
import { Container, Field, InputText, InputTitle, Button } from "./styles";
import * as Yup from "yup";
import { useProtectedPage } from "../../hooks/useProtectPage";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import Cards from "../../components/Cards";
import Header from "../../components/Header";

function FeedPage() {
  const history = useHistory();
  useProtectedPage();

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
          alert("Erro: preencha todos os campos, tente novamente mais tarde");
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
        <Field>
          <InputTitle
            id="title"
            name="title"
            type="title"
            required
            placeholder="Título"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? (
            <div>{formik.errors.title}</div>
          ) : null}
          <InputText
            required
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
          <Button type="submit">Postar</Button>
        </Field>
      </form>
    );
  };
  return (
    <Container>
      <Header />
      <PostForm />
      <Cards />
    </Container>
  );
}

export default FeedPage;
