// ICONMONSTR
import ButtonBox from "../ButtonBox/ButtonBox";
import Hamburger from "../Hamburger/Hamburger";

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
        <ButtonBox setShowModal={setShowModal} setIsLoggin={setIsLoggin} />
        <Hamburger setShowNav={setShowNav} />
      </div>
    </div>
  );
};

export default Nav;
