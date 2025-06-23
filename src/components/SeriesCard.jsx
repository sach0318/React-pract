const SeriesCard = ({ ele }) => {
  return (
    <li key={ele.key}>
      <div className=" ">
        <img src={ele.img_url} alt="logo" className="rounded-lg " />
        <h2>Name : {ele.name}</h2>
        <h3>Rating : {ele.rating} </h3>
        <h4 className="mx-auto ">Summary : {ele.description} </h4>
        <p>Genre: {ele.genre} </p>
        <p>Cast : {ele.cast} </p>
        <a href={ele.watch_url} target="_blank">
          <button className=" border-2 bg-lime-500 font-bold py-1 cursor-pointer rounded-lg p-1 ">
            Watch Now
          </button>
        </a>
      </div>
    </li>
  );
};

export default SeriesCard;
