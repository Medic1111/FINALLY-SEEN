import Header from "../components/Header/Header";

const Portfolio: React.FC = () => {
  return (
    <section className="bg-white ">
      {/* <Header /> */}
      <div className="relative flex">
        <div className="min-h-screen lg:w-1/3"></div>
        <div className="hidden w-3/4 min-h-screen bg-gray-100  lg:block"></div>

        <div className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl xl:text-5xl ">
            Meet the <span className="text-teal-700">developer's</span> <br />{" "}
            portfolios
          </h1>

          <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
            <img
              className="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96"
              src="https://raw.githubusercontent.com/Medic1111/FINALLY-SEEN/main/img1.png"
              alt=""
            />

            <div className="mt-8 lg:px-10 lg:mt-0">
              <h1 className="text-2xl font-semibold text-gray-800 lg:w-72">
                Developer Title{" "}
                <span className="text-teal-500"> (Ups: 480) </span>
              </h1>

              <p className="max-w-lg mt-6 text-gray-500 ">
                “ A description of the developer and short journey brief ”
              </p>

              <a
                href=""
                className="block mt-6 text-lg font-medium text-teal-500"
              >
                DevName LastName(link to github)
              </a>
              <a href="" className="text-gray-600 ">
                portfolio URL
              </a>
            </div>
          </div>

          <div className="flex items-center justify-between w-2/5 mt-12 sm:w-1/5">
            <button className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100    hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="teal"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z"
                />
              </svg>
            </button>

            <button className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100  lg:mx-6 hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="teal"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
