import React, { Component } from "react";
import Axios from "axios";
import "./GalleryItem.css";

class GalleryItem extends Component {
  state = {
    likes: this.props.thisItem.likes,
    displayImage: true,
  };

  imageclick = () => {
    console.log("In imageClick");
    this.setState({
      displayImage: !this.state.displayImage,
    });
  }; // end imageClick

  likeClick = () => {
    console.log("In likeClick. this.props.thisItem is", this.props.thisItem);
    this.setState({
      likes: this.state.likes + 1,
    });
    let dataToSend = {
      likes: this.state.likes,
    };
    Axios.put("/gallery/like/" + this.props.thisItem.id, dataToSend);
  }; // end likeClick
  render() {
    return (
      <div className="image-area">
        <div onClick={this.imageclick}>
          {this.state.displayImage ? (
            <img src={this.props.thisItem.path}></img>
          ) : (
            <h2>{this.props.thisItem.description}</h2>
          )}
        </div>
        <h3>Likes: {this.state.likes}</h3>

        <button onClick={this.likeClick}>Like</button>
        {/* I am text from GalleryItem {JSON.stringify(this.props.thisItem)}
      {console.log("In GalleryItem", this.props.thisItem.description)}
       */}
      </div>
    );
  }
}

export default GalleryItem;
