import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { Container } from './styles';

function LoginPage() {
  const LoginForms = () => {
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
        alert(JSON.stringify(values, null, 2));
      },
    });
    return (
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>
        <div>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>
        <div>
          <button type="submit">Entrar</button>{" "}
        </div>
        <div>
          <button>Cadastre-se</button>{" "}
        </div>
      </form>
    );
  };
  return (
    <div>
      <h1>Login Page</h1>
      <LoginForms />
    </div>
  );
}

export default LoginPage;
