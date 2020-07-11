import React, { Component } from "react";
import Axios from "axios";

class GalleryPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: "",
      description: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      path: event.target.value,
      description: event.target.value,
    });
  }

  handleChangeFor = (event, propertyName) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.path + this.state.description);
    event.preventDefault();

    let dataToSend = {
      path: this.state.path,
      description: this.state.description
    }
    Axios.post("/gallery/", dataToSend).then(function(response){
      console.log("In GalleryPost Axios POST then", JSON.stringify(response.data));
    })

    /// - uncomment to clear inputs after submission... maybe do POST above this line
    // this.setState({
    //   path: "",
    //   description: "",
    // });
  }

  render() {
    return (<>
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
