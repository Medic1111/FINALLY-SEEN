import axios from "axios";
import { useEffect, useState } from "react";
import Team from "../Team/Team";
import { TeamData } from "../../models/TeamData";
import Stats from "../Stats/Stats";

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
        <Stats data={data} />
        <Team data={data} />
      </section>
    </>
  );
};

export default Who;
