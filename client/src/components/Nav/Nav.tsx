// ICONMONSTR

interface Props {
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav: React.FC<Props> = ({ setShowNav }) => {
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
          <a
            className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
            href="/"
          >
            Login
          </a>

          <div className="hidden sm:flex">
            <a
              className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
              href="/"
            >
              Register
            </a>
          </div>
        </div>

        <div className="block md:hidden">
          <button
            onClick={() => setShowNav(true)}
            className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
