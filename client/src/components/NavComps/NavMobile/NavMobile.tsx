import { useContext } from "react";
import { AuthCtx } from "../../../features/auth-ctx";
import { UiCtx } from "../../../features/ui-ctx";
import NavLogged from "../NavLogged/NavLogged";
import NavOut from "../NavOut/NavOut";

const NavMobile: React.FC = () => {
  const uiMgr = useContext(UiCtx);
  const authMgr = useContext(AuthCtx);

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
                onClick={() => uiMgr.setShowMobileNav(false)}
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </header>

            <nav className="flex flex-col divide-y divide-gray-200 border-t border-b border-gray-200 text-sm font-medium text-gray-500">
              {!authMgr.isAuth ? <NavOut /> : <NavLogged />}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavMobile;
