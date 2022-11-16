import axios from "axios";
import { useEffect, useState } from "react";

const Who: React.FC = () => {
  const [data, setData] = useState({
    collaborators: 0,
    commits: 0,
    prs: 0,
    top: [{ avatar_url: "", login: "", html_url: "" }],
  });

  const fetchData = async () => {
    let count = 0;
    await axios
      .get("https://api.github.com/repos/Medic1111/FINALLY-SEEN/contributors")
      .then((serverRes) => {
        serverRes.data.forEach((obj: { contributions: 0 }) => {
          return (count += obj.contributions);
        });

        setData({
          collaborators: serverRes.data.length,
          commits: count,
          prs: 0,
          top: [...serverRes.data.slice(0, 8)],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section id="who" className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-3xl font-bold text-black-700 sm:text-4xl">Who</p>

            <p className="mt-4 text-black-600 sm:text-xl">
              Dynamic team of developers at all levels, always evolving but most
              importantly always counting.
            </p>
          </div>

          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4  sm:grid-cols-3">
              <div className="flex flex-col rounded-lg border border-black-100 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-black-500">
                  Collaborators
                </dt>

                <dd className="text-4xl font-extrabold text-teal-500 md:text-5xl">
                  {data.collaborators}
                </dd>
              </div>

              <div className="flex flex-col rounded-lg border border-black-100 px-4 py-6 text-center">
                <dt className="order-last text-lg font-medium text-black-500">
                  Commits
                </dt>

                <dd className="text-4xl font-extrabold text-teal-500 md:text-5xl">
                  {data.commits}
                </dd>
              </div>

              <div className="flex flex-col rounded-lg border border-black-100 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-black-500">
                  Team {"=)"}
                </dt>

                <dd className="text-4xl font-extrabold text-teal-500 md:text-5xl">
                  1
                </dd>
              </div>
            </dl>
          </div>
        </div>
        {/* TEAM */}
        <div className="container px-6 py-8 mx-auto">
          <p className="text-center text-3xl font-bold text-black-700 sm:text-4xl">
            Top Contributors
          </p>
          <div className=" items-center justify-center grid  gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.top.map((obj, index) => {
              return (
                <>
                  <div className="w-full max-w-xs text-center columns-auto">
                    <img
                      className="object-cover overflow-x-auto object-center w-full h-48 mx-auto rounded-lg"
                      src={obj.avatar_url}
                      alt="avatar"
                    />

                    <div className="mt-2">
                      <h3 className="text-lg font-medium text-black-700 ">
                        {obj.login}
                      </h3>
                      <span className="block w-full rounded  px-12 py-3 text-sm font-medium text-teal-900 
                                        shadow hover:text-teal-600 focus:outline-none focus:ring active:text-teal-900 sm:w-auto">
                        <a target="_blank" href={obj.html_url}>
                          Check Github
                        </a>
                      </span>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Who;
