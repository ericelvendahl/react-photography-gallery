import React, { Component } from "react";
import "./App.css";
import Axios from "axios";
import Gallery from "../GalleryList/GalleryList";

class App extends Component {
  state = {
    galleryData: [],
  };
  componentDidMount() {
    this.refreshData();
  }

refreshData = () => {
    // get data from server
    Axios({
      method: "GET",
      url: "/gallery",
    })
      .then((response) => {
        console.log(`in GET in App. response is`, response);
        this.setState({
          galleryData: response.data,
        });
      })
      .catch((err) => {
        console.log("Error in GET is", err);
      });
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        {/* <p>Gallery goes here</p>
        <img src="images/goat_small.jpg" /> */}
        <Gallery galleryData={this.state.galleryData} refreshData={this.refreshData}/>
        {/* {JSON.stringify(this.state.galleryData)} */}
      </div>
    );
  }
}

export default App;
