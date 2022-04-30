import { useReducer } from "react";
import {
  authFormReducer,
  SET_CREDENTIALS,
  SET_SHOW_PASSWORD,
} from "../reducers";

export const useAuthForm = (initialForm) => {
  const [authFormState, authFormDispatch] = useReducer(authFormReducer, {
    loading: false,
    showPassword: false,
    credentials: initialForm,
  });

  const handleShowPassword = () => {
    authFormDispatch({
      type: SET_SHOW_PASSWORD,
    });
  };

  const handleInputChange = (e, field) => {
    authFormDispatch({
      type: SET_CREDENTIALS,
      payload: { field, value: e.target.value },
    });
  };

  return {
    ...authFormState,
    handleShowPassword,
    handleInputChange,
    authFormDispatch,
  };
};
