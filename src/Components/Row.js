import React, { useEffect, useState } from "react";
import Axios from "./Axios";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchData = async () => {
      const requests = await Axios.get(fetchUrl);
      setMovies(requests.data.results);
      return requests;
    };

    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      <p className="row__title">{title}</p>
      <div className="row__posters">
        {movies.map((item) => {
          return (
            <img
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              key={item.id}
              src={`${base_url}${item.poster_path}`}
              alt={item.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
