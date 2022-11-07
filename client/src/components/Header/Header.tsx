import classes from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logoBox}>
        <h1 className={classes.h1}>Finally Seen</h1>
        <p className={classes.p}>A contribution initiative</p>
      </div>
    </header>
  );
};

export default Header;
