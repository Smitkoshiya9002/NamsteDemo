import data from "../../Utils/Data";
import RestuarantCard from "./RestuarantCard";
import { useState } from "react";
const Body = () => {
  const [reslist, setReslist] = useState(data.resData);

  return (
    <div>
      <button
        onClick={() => {
          const filterlist = reslist.filter((f) => f.info.avgRating > 4);
          setReslist(filterlist);
        }}
      >
        Filter By Rating
      </button>
      <div className="rescardContainer">
        {reslist.map((r) => (
          <RestuarantCard key={r.info.id} res={r} />
        ))}
      </div>
    </div>
  );
};

export default Body;
