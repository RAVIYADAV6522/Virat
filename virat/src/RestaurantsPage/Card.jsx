import React from "react";
import "./Card.css";
export default function Card({src1,name,location,rating}) {
  return (
    <>
      <div className="card">
        <img
          className="cardimg"
          src={src1}
        ></img>
        <div className="datacard">
          <h3 className="cardname">Name:{name}</h3>
          <h3 className="cardlocation">Location:{location}</h3>
          <h3 className="cardrating">Rating:{rating}</h3>
        </div>
      </div>
    </>
  );
}
