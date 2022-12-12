import { NavigationDispatchs } from "../../models/NavigationDispatchs";

const ButtonBox: React.FC<NavigationDispatchs> = ({ setShowModal, setIsLoggin }) => {
  return (
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
  );
};

export default ButtonBox;
