import sData from "../src/api/sData.json";
import SeriesCard from "./components/SeriesCard";

export const Practice = () => {
  return (
    <ul className=" grid grid-cols-2  px-2 py-10 mx-50 text-center gap-2 font-serif rounded-lg  ">
      {sData.map((c) => {
        return <SeriesCard key={c.id} ele={c} />;
      })}
    </ul>
  );
};

export default Practice;
