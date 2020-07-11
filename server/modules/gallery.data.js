const express = require("express");
const { Router } = require("express");
const galleryRouter = express.Router();

// DB CONNECTION
// requires
const pg = require("pg");
const { default: swal } = require("sweetalert");
// globals
const pool = new pg.Pool({
  database: "react_gallery",
  host: "localhost",
  port: 5432,
  max: 15,
  idleTimeoutMillis: 30000,
});

// GET
galleryRouter.get("/", (req, res) => {
    console.log(
      `Server: in galleryRouter GET. req.body is ${req.body} res.body is ${res.body}`
    );
  
    let queryString = `SELECT * FROM "gallery_items";`;
    pool
      .query(queryString)
      .then((result) => {
        console.log(`Server: /gallery/items GET worked. result is ${result}`);
        res.send(result.rows);
      })
      .catch((err) => {
        console.log(`We got an error here. It's: ${err}`);
      });
  });



// old router action
// const galleryItems = [

//   {
//     id: 1,
//     path: "images/goat_small.jpg",
//     description: "Photo of a goat taken at Glacier National Park.",
//     likes: 0,
//   },
//   { id: 2, path: "images/goat_small.jpg", description: "ALSO GOAT", likes: 0 },
//   { id: 3, path: "images/goat_small.jpg", description: "CHEESE??", likes: 0 },

// ];

module.exports = galleryItems;
