import React from "react";
import styles from "./Input.module.css";

export const Input = ({
  id,
  type,
  title,
  error,
  value,
  placeholder,
  inputHandler,
  handleOnFocus,
}) => {
  return (
    <div className="flex-column mb-3">
      <label htmlFor={id}>{title}</label>
      <input
        required
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onFocus={handleOnFocus}
        onChange={(e) => inputHandler(e, id)}
        className={`${styles.input} mt-1 text-base rounded-sm`}
      />

      {error && (
        <div className={`${styles.error} text-base flex-row items-center mt-1`}>
          <span className="material-icons-outlined mr-1">error_outline</span>
          {error}
        </div>
      )}
    </div>
  );
};

Input.defaultProps = {
  id: "",
  type: "",
  title: "",
  error: "",
  value: "",
  placeholder: "",
  inputHandler: () => {},
  handleOnFocus: () => {},
};
