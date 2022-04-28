import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Toast.css";

export const Toast = () => {
  return (
    <ToastContainer
      draggable
      rtl={false}
      closeOnClick
      pauseOnHover
      autoClose={2000}
      pauseOnFocusLoss
      newestOnTop={false}
      position="top-right"
      hideProgressBar={false}
    />
  );
};
