import { TeamData } from "../../models/TeamData";

const Team: React.FC<{ data: TeamData }> = ({ data }) => {
  return (
    <div className="container px-6 py-8 mx-auto">
      <p className="text-center text-3xl font-bold text-gray-700 sm:text-4xl">
        Top Contributors
      </p>
      <div className=" items-center justify-center grid  gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.top.map((obj, index) => {
          return (
            <>
              <div className="w-full max-w-xs text-center">
                <img
                  className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                  src={obj.avatar_url}
                  alt="avatar"
                />

                <div className="mt-2">
                  <h3 className="text-lg font-medium text-gray-700 ">
                    {obj.login}
                  </h3>
                  <span className="mt-1 font-medium text-gray-600 ">
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
  );
};

export default Team;
