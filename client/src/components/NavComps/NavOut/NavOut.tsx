import { useContext } from "react";
import { UiCtx } from "../../../features/ui-ctx";
import classes from "./NavOut.module.css";

const NavOut: React.FC = () => {
  const uiMgr = useContext(UiCtx);
  return (
    <>
      {" "}
      <a
        href="https://github.com/Medic1111/FINALLY-SEEN"
        className="px-6 py-3"
        target="_blank"
      >
        {" "}
        Github{" "}
      </a>
      <a
        onClick={() => uiMgr.setShowMobileNav(false)}
        href="#who"
        className="px-6 py-3"
      >
        {" "}
        Who{" "}
      </a>
      <a
        onClick={() => uiMgr.setShowMobileNav(false)}
        href="#why"
        className="flex items-center justify-between px-6 py-3"
      >
        Why
      </a>
      <a
        href="https://github.com/Medic1111/FINALLY-SEEN/blob/main/CONTRIBUTING.md"
        className="flex items-center justify-between px-6 py-3"
      >
        Collab
      </a>
    </>
  );
};

export default NavOut;
