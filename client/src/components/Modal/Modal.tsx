import React from "react";
import Auth from "../Auth/Auth";
import classes from "./Modal.module.css";

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoggin: React.Dispatch<React.SetStateAction<boolean>>;
  isLoggin: boolean;
}

const Modal: React.FC<Props> = ({ setShowModal, isLoggin, setIsLoggin }) => {
  return (
    <article className={classes.article}>
      <Auth
        setShowModal={setShowModal}
        isLoggin={isLoggin}
        setIsLoggin={setIsLoggin}
      />
    </article>
  );
};

export default Modal;
