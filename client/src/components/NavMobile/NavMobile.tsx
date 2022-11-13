interface Props {
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavMobile: React.FC<Props> = ({ setShowNav }) => {
  return (
    <section className="fixed inset-y-0 right-0 z-50 flex">
      <div className="w-screen max-w-sm">
        <div className="flex h-full flex-col divide-y divide-gray-200 bg-gray-50">
          <div className="overflow-y-scroll">
            <header className="flex h-16 items-center justify-between pl-6">
              <span className="text-teal-500 text-sm font-medium uppercase tracking-widest">
                Menu
              </span>

              <button
                onClick={() => setShowNav(false)}
                aria-label="Close menu"
                className="h-16 w-16 border-l border-gray-200"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </header>

            <nav className="flex flex-col divide-y divide-gray-200 border-t border-b border-gray-200 text-sm font-medium text-gray-500">
              <a
                href="https://github.com/Medic1111/FINALLY-SEEN"
                className="px-6 py-3"
                target="_blank"
              >
                {" "}
                Github{" "}
              </a>
              <a
                onClick={() => setShowNav(false)}
                href="#who"
                className="px-6 py-3"
              >
                {" "}
                Who{" "}
              </a>
              <a
                href=""
                className="flex items-center justify-between px-6 py-3"
              >
                Why
              </a>
              <a
                href=""
                className="flex items-center justify-between px-6 py-3"
              >
                Collab
              </a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavMobile;
