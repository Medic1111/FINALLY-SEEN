import { useState, useContext } from "react";
import Nav from "../Nav/Nav";
import NavMobile from "../NavMobile/NavMobile";
import { UiCtx } from "../../features/ui-ctx";

const Header: React.FC = () => {
  const uiMgr = useContext(UiCtx);

  return (
    <header aria-label="Site Header" className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <h1 className="text-teal-600 text-3xl">FS</h1>
          <Nav />
          {uiMgr.showMobileNav && <NavMobile />}
        </div>
      </div>
    </header>
  );
};

export default Header;
