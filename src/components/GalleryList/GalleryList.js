import React, { Component } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";
import GalleryPost from "../GalleryPost/GalleryPost";


class Gallery extends Component {
  componentDidMount() {
    console.log(`In Gallery component`);
  }

  render() {
    return (
      <div className="Gallery">
        <GalleryPost refreshData={this.props.refreshData} />
        {/* {this.props.galleryData} */}
        <br />
        {this.props.galleryData.map((item, index) => (
          <GalleryItem
            thisItem={item}
            key={index}
            refreshData={this.props.refreshData}
          />
        ))}
        {/* {JSON.stringify(this.props.galleryData)}
        {console.log(this.props.galleryData[1])} */}
        {/* <GalleryItem itemData={this.props.galleryData[0]}></GalleryItem> */}
        {/* {this.props.galleryData} */}
        
        
      </div>
    );
  }
}

export default Gallery;
