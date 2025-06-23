import sData from "../src/api/sData.json";
import SeriesCard from "./components/SeriesCard";

export const Practice = () => {
  return (
    <ul className="container text-white bg-black  mx-auto text-center justify-center border-2 ">
      {sData.map((c) => {
        return <SeriesCard key={c.id} ele={c} />;
      })}
    </ul>
  );
};

export default Practice;
