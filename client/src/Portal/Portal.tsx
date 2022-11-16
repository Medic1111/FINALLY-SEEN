import React from "react";
import classes from "./Portal.module.css";
import ReactDOM from "react-dom";
const root = document.getElementById("portal") as HTMLElement;

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <article className={classes.wrapper}>{children}</article>;
};

const Portal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Wrapper>{children}</Wrapper>, root)}
    </React.Fragment>
  );
};

export default Portal;
