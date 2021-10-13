import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Form as Formulario, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { loginRequest, logOut } from '../../store/modules/auth/actions';
import { getCharacterRequest } from '../../store/modules/star_wars_characters/actions';
import Challenges from '../Challenges';

const Form = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    mode: "onChange",
  });
  const { auth } = useSelector(state => state);
  const { loading, token } = auth;

  const sessionToken = token || localStorage.getItem('@token');
  const onSubmit = data => {
    dispatch(loginRequest(data));
  };

  const sair = () => {
    dispatch(logOut());
  }

  useEffect(() => {
    dispatch(getCharacterRequest());
  }, [dispatch])
  return (
    <Formulario
      onSubmit={handleSubmit(onSubmit)}
      style={{
        textAlign: "left",
        maxWidth: "500px",
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        border: "1px solid #d3d3d3",
        borderRadius: "8px",
        padding: "24px",
        marginTop: "32px"
      }}
    >
      {sessionToken ?
        <>
          <Button
            variant="dark"
            className="mt-4"
            onClick={() => sair()}
            style={{ width: "fit-content", marginLeft: "auto" }}
          >
            {loading ? 'carregando...' : 'Sair'}
          </Button>
          <Challenges />
        </> :
        <>
          <Formulario.Label style={{ display: "block" }}>Nome</Formulario.Label>
          <Formulario.Control
            type="text"
            placeholder="Nome"
            {...register("username", { required: true })}
          />
          {errors.username && <span style={{ fontSize: "12px", color: "#bc0000" }}>O campo nome é obrigatório.</span>}
          <Formulario.Label style={{ display: "block" }}>Senha</Formulario.Label>
          <Formulario.Control
            type="password"
            placeholder="senha"
            {...register("password", { required: true })}
          />
          {errors.password && <span style={{ fontSize: "12px", color: "#bc0000" }}>O campo senha é obrigatório.</span>}
          <Button variant="dark" className="mt-4" type="submit" disabled={!isValid}>{loading ? 'carregando...' : 'Entrar'}</Button>
        </>
      }
    </Formulario>
  );
}

export default Form;