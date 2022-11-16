import classes from "./NavLogged.module.css";

// This nav will have element 'top'
// element 'top' will be an icon on screen smaller than 798px
// This nav will have element 'latest'
// element 'latest' will be an icon on screen smaller than 798px
// This nav will have element 'logout'
// element will be an icon on screen smaller than 798px
// USE MEDIA QUERY TO ACCOMPLISH TASKS
// Choose icons at your will from FONTS GOOGLE ICONS
// Dont forget to link the icons CDN on html
// STYLE ELEMENTS TO MATCH APP STYLING
// HAVE FUN and delete this comments when done

const NavLogged: React.FC = () => {
  return (
    <nav>
      <ul className="flex items-center gap-6 text-sm">
        <li>
          <a href="https://github.com/Medic1111/FINALLY-SEEN">
            <span className={`${classes.navLink} ${classes.text}`}>Top</span>
            <span className={`${classes.navLink} ${classes.icon}`}>
              <span className="material-symbols-outlined">
                keyboard_double_arrow_up
              </span>
            </span>
          </a>
        </li>
        <li>
          <a href="https://github.com/Medic1111/FINALLY-SEEN">
            <span className={`${classes.navLink} ${classes.text}`}>Latest</span>
            <span className={`${classes.navLink} ${classes.icon}`}>
              <span className="material-symbols-outlined">fiber_new</span>
            </span>
          </a>
        </li>
        <li>
          <a href="https://github.com/Medic1111/FINALLY-SEEN">
            <span className={`${classes.navLink} ${classes.text}`}>Logout</span>
            <span className={`${classes.navLink} ${classes.icon}`}>
              <span className="material-symbols-outlined">logout</span>
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavLogged;
