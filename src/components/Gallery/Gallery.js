import React, { Component } from "react";

class Gallery extends Component {
  componentDidMount(){
    console.log(`In Gallery component`);
  }
  render() {
    return (
      <div className="Gallery">
        I am some text in the Gallery component.
        {JSON.stringify(this.props.GalleryData)}
      </div>
    );
  }
}

export default Gallery;
