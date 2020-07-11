import React, { Component } from "react";

class GalleryItem extends Component {
  buttonclick = () =>{
    console.log("In buttonClick", this.props.thisItem);
  }
  render() {
    return <div className="GalleryItem">
      <br />
      I am text from GalleryItem {JSON.stringify(this.props.thisItem)}
      {console.log("In GalleryItem", this.props.thisItem.description)}
      <button onClick={this.buttonClick}>Test</button>
    </div>;
  }
}

export default GalleryItem;
