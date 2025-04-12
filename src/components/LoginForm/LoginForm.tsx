import {  useFormik } from "formik";
import * as Yup from 'yup';

import Button from "../Button/Button";
import Input from "../Input/Input";
import { LoginFormComponent, SubmitError, Title } from "./styles";
import { LoginFormValues } from "./types";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserDataContext } from "../Layout/Layout";

function LoginForm() {

  const { getUser } = useContext(UserDataContext);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const navigate = useNavigate();
 
  

  const schema = Yup.object().shape({
    email: Yup.string()
      .required('Field email is required')
      .email('Field must be a valid email')
      .max(40, 'Max 40 symbols')
      .min(12, 'Min 12 symbols'),
    password: Yup.string()
      .required('Field password is required')
      .max(255, 'Max 255 symbols')
      .min(15, 'Min 15 symbols')
      .matches(/[A-Za-z0-9]/, 'Password must contain letters and numbers')
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: async (values: LoginFormValues) => {
      setSubmitError(null);
      console.table(values);
      try {
        await getUser(); 
        navigate('/user-data'); 
      } catch (error) {
        setSubmitError("Login failed. Try again.");
        console.error(error);
      }
    }
  });

  return (
    <LoginFormComponent onSubmit={formik.handleSubmit}>
      <Title>Login form</Title>
      <Input
        name='email'
        label='Email *'
        id='email_id'
        placeholder="Enter your email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
      <Input
        name='password'
        label='Password *'
        id='password_id'
        placeholder="Enter your password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      {submitError && <SubmitError>{submitError}</SubmitError>}
      <Button name='Login' type='submit' />
    </LoginFormComponent>
  );
}

export default LoginForm;