const express = require("express");
const { Router } = require("express");
const galleryRouter = express.Router();

// DB CONNECTION
// requires
const pg = require("pg");

// globals
const pool = new pg.Pool({
  database: "react_gallery",
  host: "localhost",
  port: 5432,
  max: 15,
  idleTimeoutMillis: 30000,
});

// DELETE
galleryRouter.delete("/:id", (req, res) => {
  console.log(
    `Server: in galleryRouter DELETE. req.body.id is ${req.params.id} `
  );
  const queryString = `DELETE FROM gallery_items WHERE id=${req.params.id};`;
  pool
    .query(queryString)
    .then((responses) => {
      console.log(`Server: delete successful. responses is ${responses}`);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(`Server: Error:`, err);
      res.sendStatus(500);
    });
});

// GET
galleryRouter.get("/", (req, res) => {
  console.log(
    `Server: in galleryRouter GET. req.body is ${JSON.stringify(req.body)}`
  );

  let queryString = `SELECT * FROM "gallery_items" ORDER BY "id";`;
  pool
    .query(queryString)
    .then((result) => {
      console.log(
        `Server: /gallery/ GET worked. result.rows is ${JSON.stringify(
          result.rows
        )}`
      );
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(`We got an error here. It's: ${err}`);
    });
});

// POST
galleryRouter.post("/", (req, res) => {
  console.log(`Server: in GalleryRouter POST.`);
  let queryString = `INSERT INTO "gallery_items" ("path", "description")
                      VALUES ('${req.body.path}', '${req.body.description}');`;
  pool
    .query(queryString)
    .then((result) => {
      console.log(`Server: in GalleryRouter '/' GET. result is ${result}`);
      res.send(result);
    })
    .catch((err) => {
      console.log(`Error is ${err}`);
      res.sendStatus(500);
    });
}); // end POST route

// PUT Route for description editing
galleryRouter.put("/description/:id/", (req, res) => {
  console.log(req.params);
  console.log(
    `Server: in galleryRouter PUT, req.body is ${JSON.stringify(req.body)}`
  );
  const queryString = `UPDATE "gallery_items" SET "description" = '${req.body.description}' WHERE id = ${req.params.id}`;
  pool
    .query(queryString)
    .then((results) => {
      console.log(`Server: results.rows is ${results.rows}`);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(`Error is:`, err);
      console.log("req.params is", req.params);
      console.log("req.body.description is", req.body.description);
      res.sendStatus(500);
    });
}); // END PUT Route for description editing

// PUT Route for likes
galleryRouter.put("/like/:id/", (req, res) => {
  console.log(req.params);
  console.log(
    `Server: in galleryRouter PUT, req.body is ${JSON.stringify(req.body)}`
  );
  const queryString = `UPDATE gallery_items SET likes = ${req.body.likes} WHERE id = ${req.params.id}`;
  pool
    .query(queryString)
    .then((results) => {
      console.log(`Server: results.rows is ${results.rows}`);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(`Error is:`, err);
      console.log("req.params is", req.params);
      console.log("req.body.likes is", req.body.likes);
      res.sendStatus(500);
    });
}); // END PUT Route

// Old router stuff follows:

// const express = require('express');
// const router = express.Router();
// const galleryItems = require('../modules/gallery.data');

// // DO NOT MODIFY THIS FILE FOR BASE MODE

// // PUT Route
// router.put('/like/:id', (req, res) => {
//     console.log(req.params);
//     const galleryId = req.params.id;
//     for(const galleryItem of galleryItems) {
//         if(galleryItem.id == galleryId) {
//             galleryItem.likes += 1;
//         }
//     }
//     res.sendStatus(200);
// }); // END PUT Route

// // GET Route
// router.get('/', (req, res) => {
//     res.send(galleryItems);
// }); // END GET Route

module.exports = galleryRouter;
