const SeriesCard = ({ ele }) => {
  return (
    <li key={ele.key}>
      <div className=" border-2 ">
        <img
          src={ele.img_url}
          alt="logo"
          width="20%"
          height={10}
          className="inline-block "
        />
        <h2>Name : {ele.name}</h2>
        <h3>Rating : {ele.rating} </h3>
        <h4 className="mx-auto ">Summary : {ele.description} </h4>
        <p>Genre: {ele.genre} </p>
        <p>Cast : {ele.cast} </p>
        <a href={ele.watch_url} target="_blank">
          <button className=" border-2 bg-red-700 cursor-pointer "> Watch Now </button>
        </a>
      </div>
    </li>
  );
};

export default SeriesCard;
