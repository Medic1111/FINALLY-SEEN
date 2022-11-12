import classes from "./Why.module.css";

type Props = {
  children: React.ReactNode;
};

const Why: React.FC<Props> = ({ children }) => {
  return <main className={classes.main}>{children}</main>;
};

export default Why;