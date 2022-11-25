interface Props {
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hamburger: React.FC<Props> = ({ setShowNav }) => {
  return (
    <div className="block md:hidden">
      <button
        onClick={() => {
          setShowNav(true);
        }}
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
  );
};

export default Hamburger;
