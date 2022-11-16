import { NAV_ITEMS } from "./NavLogged.const";
import classes from "./NavLogged.module.css";

const NavLogged: React.FC = () => {
  return (
    <nav>
      <ul className="flex items-center gap-6 text-sm">
        {NAV_ITEMS.map(({ label, icon }) => (
          <li key={label}>
            <a href="https://github.com/Medic1111/FINALLY-SEEN">
              <span className={`${classes.navLink} ${classes.text}`}>
                {label}
              </span>
              <span className={`${classes.navLink} ${classes.icon}`}>
                <span className="material-symbols-outlined">{icon}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLogged;
