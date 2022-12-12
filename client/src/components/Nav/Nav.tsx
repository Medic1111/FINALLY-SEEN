// ICONMONSTR
import ButtonBox from "../ButtonBox/ButtonBox";
import Hamburger from "../Hamburger/Hamburger";
import { useContext } from "react";
import { UiCtx } from "../../features/ui-ctx";
import { AuthCtx } from "../../features/auth-ctx";
import NavLogged from "../NavLogged/NavLogged";

const Nav: React.FC = () => {
  const uiMgr = useContext(UiCtx);
  const authMgr = useContext(AuthCtx);
  return (
    <div className="md:flex md:items-center md:gap-12">
      <nav aria-label="Site Nav" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
          {!authMgr.isAuth ? (
            <>
              <a
                className="text-gray-500 transition hover:text-gray-500/75"
                href="https://github.com/Medic1111/FINALLY-SEEN"
                target="_blank"
              >
                Github
              </a>

              <a
                className="text-gray-500 transition hover:text-gray-500/75"
                href="#who"
              >
                Who
              </a>

              <a
                className="text-gray-500 transition hover:text-gray-500/75"
                href="#why"
              >
                Why
              </a>

              <a
                className="text-gray-500 transition hover:text-gray-500/75"
                href="https://github.com/Medic1111/FINALLY-SEEN/blob/main/CONTRIBUTING.md"
              >
                Collab
              </a>
            </>
          ) : (
            <NavLogged />
          )}
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        {!uiMgr.showMobileNav && !authMgr.isAuth && <ButtonBox />}
        <Hamburger />
      </div>
    </div>
  );
};

export default Nav;
