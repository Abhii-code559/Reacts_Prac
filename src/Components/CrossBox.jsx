import React from "react";
import "../assets/css/CrossBox.css";

const CrossBox = () => {
  return (
    <div className="main">

      {/* Top */}
      <div className="row center">
        <div className="box red"></div>
      </div>

      {/* Second */}
      <div className="row center">
        <div className="box dark"></div>
        <div className="box gray"></div>
        <div className="box orange"></div>
      </div>

      {/* Third */}
      <div className="row">
        <div className="box green"></div>
        <div className="box pink"></div>
        <div className="box cyan"></div>
        <div className="box blue"></div>
        <div className="box darkgreen"></div>
      </div>

      {/* Bottom */}
      <div className="row center">
        <div className="box lightpink"></div>
        <div className="box brown"></div>
        <div className="box purple"></div>
      </div>

      {/* Last */}
      <div className="row center">
        <div className="box white"></div>
      </div>

    </div>
  );
};

export default CrossBox;