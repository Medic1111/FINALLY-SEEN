import classes from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <div className={classes.textBox}>
      <p className={classes.p}>
        DEVELOPERS <span className={classes.span}>GH</span>
      </p>
      <p className={classes.p}>
        GET <span className={classes.span}>Who</span>
      </p>
      <p className={classes.p}>
        FINALLY <span className={classes.span}>Why</span>
      </p>
      <p className={classes.pLast}>
        SEEN <span className={classes.span}>Collab</span>
      </p>
    </div>
  );
};

export default Hero;
