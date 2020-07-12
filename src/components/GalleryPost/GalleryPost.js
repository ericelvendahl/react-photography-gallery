import React, { Component } from "react";
import Axios from "axios";

class GalleryPost extends Component {
  state = {
    path: "",
    description: "",
  };

  handleChange = (event) => {
    this.setState({
      path: event.target.value,
      description: event.target.value,
    });
  };

  handleChangeFor = (event, propertyName) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let dataToSend = {
      path: this.state.path,
      description: this.state.description,
    };
    let theRefresher = this.props.refreshData;
    Axios.post("/gallery/", dataToSend)
      .then(function (response) {
        console.log(
          "In GalleryPost Axios POST then",
          JSON.stringify(response.data)
        );
      })
      .then(function (response) {
        console.log("POST successful");
        theRefresher();
        console.log(JSON.stringify(this.props));
      })
      .catch(function (error) {
        console.log(`Error in POST is `, error);
      });

    /// - clear inputs after submission
    this.setState({
      path: "",
      description: "",
    });
  };

  refreshClicked = () => {
    this.props.refreshData();
    console.log("Refresh clicked");
  };

  render() {
    return (
      <>
        <button onClick={this.refreshClicked}>Refreash</button>
        <h3>Add an image:</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Path:
            <input
              type="text"
              value={this.state.path}
              onChange={(event) => this.handleChangeFor(event, "path")}
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              value={this.state.description}
              onChange={(event) => this.handleChangeFor(event, "description")}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default GalleryPost;
