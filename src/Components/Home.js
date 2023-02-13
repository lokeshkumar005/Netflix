import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Row from "./Row";
import requests from "./Requests";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div>
        <Navbar />

        <Header />

        <Row
          title="NETFLIX ORIGINAL"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
        <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
        <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
        <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
        <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="ROMANTIC MOVIES" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />

        <Footer />
      </div>
    </>
  );
}

export default Home;
