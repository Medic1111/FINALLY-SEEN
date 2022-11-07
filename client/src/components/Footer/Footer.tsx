import classes from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <small className={classes.small}>
        Medic1111 {new Date().getFullYear()} Copyrights
      </small>
    </footer>
  );
};

export default Footer;
