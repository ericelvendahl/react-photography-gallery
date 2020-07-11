import React, { Component } from "react";
import GalleryItem from '../GalleryItem/GalleryItem';

class Gallery extends Component {
  componentDidMount() {
    console.log(`In Gallery component`);
  }
  render() {
    return (
      <div className="Gallery">
        I am some text in the Gallery component.
        {/* {this.props.galleryData} */}
        There should be some gallery data below this line
        <br />
        { this.props.galleryData.map( ( item, index )=><GalleryItem thisItem={ item } key={ index }/>)}
        <br />
        {/* {JSON.stringify(this.props.galleryData)}
        {console.log(this.props.galleryData[1])} */}

        {/* <GalleryItem itemData={this.props.galleryData[0]}></GalleryItem> */}
        {/* {this.props.galleryData} */}
      </div>
    );
  }
}

export default Gallery;
