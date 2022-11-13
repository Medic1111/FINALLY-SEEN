const Why: React.FC = () => {
  return (
    <section id="why" className="bg-white dark:bg-gray-800 w-full mx-auto p-8">
      <div className="flex items-center md:items-start flex-col md:flex-row justify-center">
        <div className="w-full md:w-2/3">
          <p className="py-5 text-center text-3xl font-bold text-gray-700 sm:text-4xl">
            Why
          </p>
          <p className="text-gray-600 dark:text-white w-full md:w-3/4 m-auto text-left text-lg md:text-2xl">
            <span className="font-bold text-teal-500">“</span>
            The question is "why not". The sense of community comes with kind
            gestures of offering what you can from a good place. You never know
            what treasure is coming with the next commit, but you know
            inherently to treasure each and every single one no matter the
            outcome.
            <span className="font-bold text-teal-500">”</span>
          </p>
          <div className="flex mt-8 items-center justify-center">
            <span className="font-semibold text-teal-500 mr-2 text-lg">
              Aryse Pagano
            </span>
            <span className="text-gray-400 text-xl font-light">/</span>
            <span className="text-gray-400 text-md ml-2">Project Owner</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
