import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const style = {
  width: "100%",
  height: "100%",
};
class Maps extends Component {
  render() {
    return (
      <>
        <Map
          initialCenter={{
            lat: 36.8394033,
            lng: 10.3013364,
          }}
          google={this.props.google}
          zoom={14}
          containerStyle={style}
        />
        ;
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDq3UaQ8tQAdalp4lYHDygOHMfxNtBdvHw",
})(Maps);
