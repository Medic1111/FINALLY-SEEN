import React from "react";
import Auth from "../Auth/Auth";
import classes from "./Modal.module.css";

const Modal: React.FC = () => {
  return (
    <article className={classes.article}>
      <Auth />
    </article>
  );
};

export default Modal;
