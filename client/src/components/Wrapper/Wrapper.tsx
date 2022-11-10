import classes from "./Wrapper.module.css";

type Props = {
  children: React.ReactNode;
};

const Wrapper: React.FC<Props> = ({ children }) => {
  return <main className={classes.main}>{children}</main>;
};

export default Wrapper;
