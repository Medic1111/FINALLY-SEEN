import { useState } from "react";
import Nav from "../Nav/Nav";
import NavMobile from "../NavMobile/NavMobile";

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoggin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<Props> = ({ setShowModal, setIsLoggin }) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <header aria-label="Site Header" className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <h1 className="text-teal-600 text-3xl">FS</h1>
          <Nav
            setShowModal={setShowModal}
            setShowNav={setShowNav}
            setIsLoggin={setIsLoggin}
          />
          {showNav && <NavMobile setShowNav={setShowNav} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
