import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./Loader.module.css";

export const Loader = ({ size }) => {
  const style = {
    color: "var(--primary-color)",
  };

  return (
    <div className={`${styles.container}`}>
      <CircularProgress size={size || 80} sx={style} />
    </div>
  );
};

Loader.defaultProps = {
  size: 0,
};
