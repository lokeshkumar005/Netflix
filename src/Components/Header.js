import React, { useEffect, useState } from "react";
import Axios from "./Axios";
import requests from "./Requests";

function Header() {
  const slice = (string, number) => {
    return string?.length > number ? string.substr(0, number) + "..." : string;
  };

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await Axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    };

    fetchData();
  }, []);
  return (
    <>
      <div
        className="header"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        }}
      >
        <div className="header__content">
          <h1 className="header__title">{movie.name}</h1>
          <div className="header__buttons">
            <button className="header__buttons--1">Play</button>

            <button className="header__buttons--2">My list</button>
          </div>
          <h3 className="header__description">{slice(movie.overview, 200)}</h3>
        </div>

        <div className="header__fade"></div>
      </div>
    </>
  );
}

export default Header;
