# Eric Elvendahl: Photography Portfolio

## Description

Duration: Weekend project

This project is a photography portfolio web site. It shows a gallery of images with descriptions and allows the user to 'like', delete, or add a photo. The user can also edit the photo's description.

### Prerequisites

- Node.js

## Installation

1. Create a database named `react_gallery`.
2. The queries in the `tables.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries,
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage

1. View page to see images
2. Click on an image to see a short description
3. If the user likes an image, he/she can click the 'like' button to relect this
4. If the user would like to remove an image from the gallery, they can click the 'Delete' button
5. If the user would like to modify the description of an image, they can click the 'Edit Description' button. Once finished editing the description they can click the button again to save changes.
6. If the user woud like to add an image, they can add a path to an image on the server. They can also include a description.

## Built With

React
Axios
HTML/CSS/JavaScript
postgres/pg
