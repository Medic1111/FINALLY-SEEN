import axios from "axios";
import { useEffect, useState } from "react";
import Team from "../Team/Team";
import { TeamData } from "../../models/TeamData";

const Who: React.FC = () => {
  const [data, setData] = useState<TeamData>({
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
            <p className="text-3xl font-bold text-gray-700 sm:text-4xl">Who</p>

            <p className="mt-4 text-gray-600 sm:text-xl">
              Dynamic team of developers at all levels, always evolving but most
              importantly always counting.
            </p>
          </div>

          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4  sm:grid-cols-3">
              <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Collaborators
                </dt>

                <dd className="text-4xl font-extrabold text-teal-500 md:text-5xl">
                  {data.collaborators}
                </dd>
              </div>

              <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Commits
                </dt>

                <dd className="text-4xl font-extrabold text-teal-500 md:text-5xl">
                  {data.commits}
                </dd>
              </div>

              <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Team {"=)"}
                </dt>

                <dd className="text-4xl font-extrabold text-teal-500 md:text-5xl">
                  1
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <Team data={data} />
      </section>
    </>
  );
};

export default Who;
