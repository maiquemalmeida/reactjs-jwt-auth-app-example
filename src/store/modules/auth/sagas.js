import { all, takeLatest, call, put } from "redux-saga/effects";

import { toast } from "react-toastify";

import api from "~/services/api";
import history from "~/services/history";

import { signInSuccess, signFailure } from "./actions";

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, "session", { email, password });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token.token}`;

    yield put(signInSuccess(token, user));

    history.push("/");
  } catch (err) {
    toast.error("Falha na autenticação. Verifique os seus dados.");
    yield put(signFailure());
  }
}

export function signOut() {
  history.push("/login");
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token.token}`;
  }
}

export default all([
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_OUT", signOut),
  takeLatest("persit/REHYDRATE", setToken)
]);
