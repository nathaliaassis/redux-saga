import React from 'react';
import { useForm } from "react-hook-form";
import { Form as Formulario, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { add, remove } from '../../store/modules/add_remove/actions';
import { loginRequest, logOut } from '../../store/modules/auth/actions';

const Form = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    mode: "onChange",
  });
  const { addRemove, auth } = useSelector(state => state);
  const { loading, token } = auth;

  const sessionToken = token || localStorage.getItem('@token');

  const onSubmit = data => {
    dispatch(loginRequest(data));
  };
  const sair = () => {
    dispatch(logOut());
  }

  return (
    <Formulario
      onSubmit={handleSubmit(onSubmit)}
      style={{
        textAlign: "left",
        maxWidth: "300px",
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
          <h5>Quantidade:</h5>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              variant="success" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "32px", width: "32px" }}
              disabled={addRemove === 0}
              onClick={() => dispatch(remove())}
            >
              -
      </Button>
            <span className="ml-2 mr-2">{addRemove}</span>
            <Button
              variant="success" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "32px", width: "32px" }}
              onClick={() => dispatch(add())}
            >
              +
      </Button>
          </div>
          <Button variant="dark" className="mt-4" onClick={() => sair()}>{loading ? 'carregando...' : 'Sair'}</Button>
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