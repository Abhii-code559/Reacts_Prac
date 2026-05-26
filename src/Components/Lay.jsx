import React from "react";

const Lay = () => {
  return (
    <div className="container_layout">
      
      {/* Top Red Box */}
      <div className="box red"></div>

      {/* Second Row */}
      <div className="row">
        <div className="box yellow"></div>
        <div className="box cyan"></div>
      </div>

      {/* Third Row */}
      <div className="row">
        <div className="box orange"></div>
        <div className="box blue"></div>
        <div className="box lightorange"></div>
        <div className="box pink"></div>
      </div>

    </div>
  );
};

export default Lay;