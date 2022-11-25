import FooterIcons from "../FooterIcons/FooterIcons";
import FooterNav from "../FooterNav/FooterNav";

const Footer: React.FC = () => {
  return (
    <footer aria-label="Site Footer" className="bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center text-teal-600">
          <p className="text-3xl" onClick={() => {window.scrollTo(0, 0);}}>FS</p>
        </div>
        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
          This is an open-source project with a MIT license and its purpose is
          to promote contributions from developers at all levels.
        </p>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
          Medic1111 {new Date().getFullYear()} Copyrights
        </p>
        <FooterNav />
        <FooterIcons />
      </div>
    </footer>
  );
};

export default Footer;
