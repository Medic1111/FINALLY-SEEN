import { useContext } from "react";
import { UiCtx } from "../../../features/ui-ctx";

const Hamburger: React.FC = () => {
  const uiMgr = useContext(UiCtx);

  return (
    <div className="block md:hidden">
      <button
        onClick={() => {
          uiMgr.setShowMobileNav(true);
        }}
        className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  );
};

export default Hamburger;
