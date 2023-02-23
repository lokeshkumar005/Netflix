import React, { useEffect, useState } from "react";
import Axios from "./Axios";
import Card from "./Card";
// import requests from "./Requests";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const [card, setCard] = useState(null);

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
          if (item.id === card) {
            return (
              <Card
                key={item.id}
                image={`${base_url}${item.backdrop_path}`}
                title={item.name || item.title}
                popularity={item.vote_average}
                overview={item.overview}
                setCard={setCard}
              />
            );
          }

          return (
            <img
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              key={item.id}
              src={`${base_url}${item.poster_path}`}
              alt={item.name}
              onClick={() => setCard(item.id)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
