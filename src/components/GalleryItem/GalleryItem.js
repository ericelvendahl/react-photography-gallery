import React, { Component } from "react";

class GalleryItem extends Component {
  likeClick = () =>{
    console.log("In likeClick. this.props.thisItem is", this.props.thisItem);
  }
  render() {
    return <div>
      <img src={this.props.thisItem.path} />
      
      <h2>{this.props.thisItem.description}</h2>
      
      <button onClick={this.likeClick}>Like [not implemented]</button>
      {/* I am text from GalleryItem {JSON.stringify(this.props.thisItem)}
      {console.log("In GalleryItem", this.props.thisItem.description)}
       */}
       
    </div>;
  }
}

export default GalleryItem;
