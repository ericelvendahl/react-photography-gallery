import React, { Component } from "react";
import Axios from "axios";
import "./GalleryItem.css";

class GalleryItem extends Component {
  state = {
    likes: this.props.thisItem.likes,
    displayImage: true,
    showEdit: false,
    descriptionEdit: "",
  };
  editClick = () => {
    console.log("In editClick. this.state.showEdit is", this.state.showEdit);
    console.log(
      "In editClick. this.state.descriptionEdit is",
      this.state.descriptionEdit
    );
    this.setState({
      showEdit: !this.state.showEdit,
    });
    if (this.state.descriptionEdit !== "") {
      // Axios to get and then put
      console.log("attempting Axios PUT");
      let dataToSend = {
        description: this.state.descriptionEdit,
      };
      Axios.put("/gallery/description/" + this.props.thisItem.id, dataToSend)
        .then(function (response) {
          console.log("PUT successful with response", response);
        })
        .catch(function (error) {
          console.log("Error in put is", error);
        });
      // refresh page
      this.props.refreshData();
    }
  };
  deleteItem = () => {
    console.log(JSON.stringify(this.props));
    let theyAreSure = window.confirm(
      "Are you sure you want to remove this picture?"
    );
    let theRefresher = this.props.refreshData;
    if (theyAreSure) {
      console.log("They are sure");
      Axios.delete("/gallery/" + this.props.thisItem.id)
        .then((response) => {
          console.log(`delete successful`);
          theRefresher();
        })
        .catch((error) => {
          console.log("Delete failed with error", error);
        });
    } else {
      console.log("They cancelled");
    }
  }; // end deleteItem

  handleChangeFor = (event, propertyName) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value,
    });
  }; // end handleChangeFor

  imageClick = () => {
    console.log("In imageClick");
    this.setState({
      displayImage: !this.state.displayImage,
    });
  }; // end imageClick

  likeClick = () => {
    console.log("In likeClick. this.props.thisItem is", this.props.thisItem);
    console.log("In likeClick. this.state.likes is", this.state.likes);
    let dataToSend = {
      likes: this.state.likes + 1,
    };
    this.setState({
      likes: dataToSend.likes,
    });
    Axios.put("/gallery/like/" + this.props.thisItem.id, dataToSend).then(
      (result) => {
        console.log(
          "In updateLikesOnServer after Axios call. this.state.likes is",
          this.state.likes
        );
      }
    );
  }; // end likeClick

  render() {
    return (
      <div className="image-area">
        <div onClick={this.imageClick} className="gallery-item">
          {this.state.displayImage ? (
            <img src={this.props.thisItem.path} alt="Gallery"></img>
          ) : (
            <h3 className="brooks">{this.props.thisItem.description}</h3>
          )}
        </div>
        <h3>Likes: {this.state.likes}</h3>

        <button onClick={this.likeClick}>Like</button>
        <button onClick={this.deleteItem}>Delete</button>
        {this.state.showEdit ? (
          <input
            type="text"
            placeholder={this.props.thisItem.description}
            value={this.state.descriptionEdit}
            onChange={(event) => this.handleChangeFor(event, "descriptionEdit")}
          ></input>
        ) : (
          <h2> </h2>
        )}
        {/* Above h2 is dummy text to supress errror */}
        <button onClick={this.editClick} value={this.descriptionEdit}>
          Edit Description
        </button>
        {/* I am text from GalleryItem {JSON.stringify(this.props.thisItem)}
      {console.log("In GalleryItem", this.props.thisItem.description)}
       */}
      </div>
    );
  }
}

export default GalleryItem;
