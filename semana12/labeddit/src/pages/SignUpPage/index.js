import React from "react";
import axios from "axios";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { Field, Input } from "../../components/styles";

// import { Container } from './styles';

function SignUpPage() {
  const history = useHistory();

  const SignUpForm = () => {
    const signUp = (values) => {
      const body = values;

      axios
        .post(
          "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup",
          body
        )
        .then((res) => {
          alert("Formulário enviado com Sucesso");
          history.push("/login");
        })
        .catch((err) => {
          alert(err);
        });
    };
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
        username: "",
      },
      validationSchema: Yup.object({
        email: Yup.string().email("Endereço de Email inválido").required(""),
        password: Yup.string()
          .min(4, "Deve conter no mínimo 4 caracteres")
          .max(15, "Deve ter no máximo 20 caracteres")
          .required(""),
        username: Yup.string()
          .min(6, "Deve conter no mínimo 6 caracteres")
          .max(10, "Deve ter no máximo 20 caracteres")
          .required(""),
      }),
      onSubmit: (values) => {
        signUp(values);
      },
    });
    return (
      <form onSubmit={formik.handleSubmit}>
        <Field>
          <Input
            id="username"
            name="username"
            type="username"
            placeholder="Nome do usuário"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username ? (
            <div>{formik.errors.username}</div>
          ) : null}
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Senha"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </Field>

        <div>
          <button type="submit">Cadastre-se</button>
        </div>
      </form>
    );
  };

  return (
    <div>
      <h1>Cadastre-se</h1>
      <SignUpForm />
    </div>
  );
}

export default SignUpPage;
