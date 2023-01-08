const FooterNav: React.FC = () => {
  return (
    <nav aria-label="Footer Nav" className="mt-12">
      <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
        <li>
          <a
            className="text-gray-700 transition hover:text-gray-700/75"
            href="/"
          >
            Github
          </a>
        </li>

        <li>
          <a
            className="text-gray-700 transition hover:text-gray-700/75"
            href="#who"
          >
            Who
          </a>
        </li>

        <li>
          <a
            className="text-gray-700 transition hover:text-gray-700/75"
            href="#why"
          >
            Why
          </a>
        </li>

        <li>
          <a
            className="text-gray-700 transition hover:text-gray-700/75"
            href="/"
          >
            Collab
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
