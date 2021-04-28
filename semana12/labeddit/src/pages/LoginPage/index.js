import React from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Input, Fields } from "./styles";
import { goToSignUpPage } from "../../routes/coordinator";

function LoginPage() {
  const history = useHistory();

  const LoginForm = () => {
    const login = (values) => {
      const body = values;
      axios
        .post(
          "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login",
          body
        )
        .then((res) => {
          window.localStorage.setItem("token", res.data.token);
          history.push("/feeds");
        })
        .catch((err) => {
          alert("Erro: Usuário não encontrado");
        });
    };
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: Yup.object({
        email: Yup.string().email("Endereço de Email inválido").required(""),
        password: Yup.string()
          .max(15, "Deve ter no máximo 20 caracteres")
          .required(""),
      }),
      onSubmit: (values) => {
        login(values);
      },
    });
    return (
      <form onSubmit={formik.handleSubmit}>
        <Fields>
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
        </Fields>
        <div>
          <button type="submit">Entrar</button>
        </div>
        <div>
          <button onClick={() => goToSignUpPage(history)}>Cadastre-se</button>{" "}
        </div>
      </form>
    );
  };
  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
