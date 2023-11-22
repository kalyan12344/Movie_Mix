import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../Styling/view_movies.css";
// import "bootstrap/dist/css/bootstrap.min.css";

const url = "http://localhost:8080/theater";

const TheaterList = () => {
  const [theaters, setTheaters] = useState([]);

  useEffect(() => {
    Axios.get(`${url}/get`)
      .then((response) => {
        setTheaters(response.data);
      })
      .then((err) => console.log(err));
  }, []);

  return (
    <div className="">
      <h2>Theaters</h2>
      <div className="movie-list">
        {theaters.map((theater) => (
          <div key={theater.theater_id} className="">
            <div className="movie-card">
              <img
                src={theater.theater_url}
                className="card-img"
                alt={theater.theater_name}
              />
              <div className="card-body">
                <h5 className="card-title">{theater.theater_name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheaterList;
