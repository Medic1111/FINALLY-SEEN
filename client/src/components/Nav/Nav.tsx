// ICONMONSTR

import Hamburger from "../Hamburguer/Hamburger";

interface Props {
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoggin: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav: React.FC<Props> = ({ setShowNav, setShowModal, setIsLoggin }) => {
  return (
    <div className="md:flex md:items-center md:gap-12">
      <nav aria-label="Site Nav" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <a
              className="text-gray-500 transition hover:text-gray-500/75"
              href="https://github.com/Medic1111/FINALLY-SEEN"
              target="_blank"
            >
              Github
            </a>
          </li>

          <li>
            <a
              className="text-gray-500 transition hover:text-gray-500/75"
              href="#who"
            >
              Who
            </a>
          </li>

          <li>
            <a
              className="text-gray-500 transition hover:text-gray-500/75"
              href="#why"
            >
              Why
            </a>
          </li>

          <li>
            <a
              className="text-gray-500 transition hover:text-gray-500/75"
              href="https://github.com/Medic1111/FINALLY-SEEN/blob/main/CONTRIBUTING.md"
            >
              Collab
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <p
            className="cursor-pointer rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
            onClick={() => {
              setShowModal(true);
              setIsLoggin(true);
            }}
          >
            Login
          </p>

          <div className="hidden sm:flex">
            <p
              className="cursor-pointer rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
              onClick={() => {
                setShowModal(true);
                setIsLoggin(false);
              }}
            >
              Register
            </p>
          </div>
        </div>
        <Hamburger setShowNav={setShowNav} />
      </div>
    </div>
  );
};

export default Nav;
