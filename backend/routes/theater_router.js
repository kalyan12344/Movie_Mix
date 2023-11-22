const express = require("express");
const connection = require("../config/database");
const router = express.Router();
router.get("/get", (req, res, next) => {
  var query = "select * from theater";
  connection.query(query, (err, results) => {
    if (!err) {
      return res.status(200).json(results);
    } else {
      return res.status(500).json(err);
    }
  });
});

router.get("/getTheatersInLoc/:selectedLocation/:movieID", (req, res, next) => {
  const selectedCity = req.params.selectedLocation;
  const movieId = req.params.movieID;

  console.log(selectedCity, movieId);
  // Query to get movie details based on movieId
  const query =
    "select * from theater t join location l on t.location_id = l.location_id join show_time st on st.theater_id = t.theater_id join movies m on m.movie_id = st.movie_id where l.city = ? and m.movie_id = ?";
  connection.query(query, [selectedCity, movieId], (err, results) => {
    if (!err) {
      if (results.length > 0) {
        const theater = results;
        res.status(200).json(theater);
      } else {
        res.status(404).json({ message: "theaters not found" });
      }
    } else {
      res.status(500).json(err);
    }
  });
});

router.post("/create", (req, res, next) => {
  let theater = req.body;
  console.log(theater);
  var query =
    "insert into theater(theater_name,description,theater_url,admin_id,location_id) values(?,?,?,?,?)";
  connection.query(
    query,
    [
      theater.theater_name,
      theater.description,
      theater.theater_url,
      theater.admin_id,
      theater.location_id,
    ],
    (err, results) => {
      if (!err) {
        console.log(results);
        return res.status(200).json({ message: "Theater added successfully" });
      } else {
        console.log(results, "inside the error");
        return res.status(500).json(err);
      }
    }
  );
});

module.exports = router;
