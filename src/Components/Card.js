import React from "react";

function Card(props) {
  const { image, title, popularity, overview, setCard } = props;
  return (
    <div className="card">
      <div className="card__text">
        <img src={image} alt="/" />

        <div className="card__body">
          <h1 className="card-title">{title}</h1>
          <p className="card-text">{overview}</p>
          <p className="card-text" style={{ color: "#E50914" }}>
            Popularity ~ {popularity}
          </p>
          <button>Add to My List</button>
        </div>
        <div className="card__cancelButton">
          <button onClick={() => setCard(null)}>
            <i className="fa-sharp fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
