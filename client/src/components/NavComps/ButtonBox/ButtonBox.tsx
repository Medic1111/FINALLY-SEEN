import { useContext } from "react";
import { AuthCtx } from "../../../features/auth-ctx";
import { UiCtx } from "../../../features/ui-ctx";

const ButtonBox: React.FC = () => {
  const uiMgr = useContext(UiCtx);
  const authMgr = useContext(AuthCtx);

  return (
    <div className="sm:flex sm:gap-4">
      <p
        className="cursor-pointer rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
        onClick={() => {
          uiMgr.setShowModal(true);
          authMgr.setIsLoggin(true);
        }}
      >
        Login
      </p>

      <div className="hidden sm:flex">
        <p
          className="cursor-pointer rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
          onClick={() => {
            uiMgr.setShowModal(true);
            authMgr.setIsLoggin(false);
          }}
        >
          Register
        </p>
      </div>
    </div>
  );
};

export default ButtonBox;
