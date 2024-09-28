import React from "react";
import "./ViratFav.css";
import ravi from "../assets/ravi.png"

export default function ViratFav() {
  return (
    <>
      <section>
        <div id="favourite" className="viratfav">
          <div className="data">
            <h3>
              RAVI'S <br></br>FAVOURITE
            </h3>
            <p>
              Known for his passion for fitness and health, Ravi’s <br></br>{" "}
              favourites are a delicious blend of exquisite flavour and{" "}
              <br></br>abundant nutrition. Click below to explore these{" "}
              <br></br> handpicked dishes!
            </p>
          </div>

          <div>
            <img className="ravi" src={ravi}></img>
          </div>
        </div>
      </section>
    </>
  );
}
