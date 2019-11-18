import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "~/store/modules/auth/actions";
import { Container } from "./styles";
import api from "~/services/api";

export default function Dashboard() {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }

  function handleTestApi() {
    api.get("/");
  }

  return (
    <Container>
      <h1>Dashboard</h1>
      <button type="button" onClick={handleTestApi}>
        Testar envio do Token
      </button>
      <button type="button" onClick={handleLogout}>
        Sair
      </button>
    </Container>
  );
}
