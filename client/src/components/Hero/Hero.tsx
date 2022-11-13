const Hero: React.FC = () => {
  return (
    <section className="relative bg-hero-img   bg-cover bg-center bg-no-repeat">
      <div className="absolute  inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-gray-700 text-3xl font-extrabold sm:text-6xl">
            Where developers are
            <strong className=" mb-10 block font-extrabold text-teal-500">
              Finally Seen
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-teal-50">
            A collaboration initiative as open-source.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto"
            >
              Let me in
            </a>

            <a
              href="#"
              className="block w-full rounded bg-teal-50 px-12 py-3 text-sm font-medium text-teal-600 shadow hover:text-teal-700 focus:outline-none focus:ring active:text-teal-500 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
