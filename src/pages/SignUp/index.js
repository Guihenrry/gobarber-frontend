import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Input from '~/components/Input';
import logo from '~/assets/logo.svg';

import { signUpRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('O campo nome é obrigatório'),
        email: Yup.string()
          .email('È preciso um email valido')
          .required('O e-email é um campo obrigatório'),
        password: Yup.string()
          .min(6, 'A senha deve ter no minimo 6 caracteres')
          .required('A senha é um campo obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // Validation passed
      dispatch(signUpRequest(data.name, data.email, data.password));
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Seu nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </>
  );
}
