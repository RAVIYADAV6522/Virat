import React from "react";
import { Link } from "react-router-dom";
import "./Restaurants.css";
export default function Restaurants() {
  return (
    <>
      
      <div id="restaurant" className="parentrestro">
        <div className="Restaurants">
          <div className="restrohead">
            <div className="r-div">
            <h3 className="r-head">RESTAURANTS</h3>
            
            </div>
            
            <p className="r-head-para">
              {/* 2 cities. 4 outlets. Infinite memories. And many more to come… */}
            </p>
          </div>
        </div>

        <div className="RestroMiddle">
          <div className="restrodata">
            <div>
              <img src="https://one8commune.co.in/wp-content/uploads/2024/03/LAH-09970-2.webp"></img>
              <h3 className="location">
                FOURLEAF CAFE <br></br> & RESTAURANTS, <br></br> Juhu, Mumbai
              </h3>
            </div>

            <div>
              <img src="https://one8commune.co.in/wp-content/uploads/2024/03/2-1365x2048.webp"></img>
              <h3 className="location">
                ONE 8 COMMUNE <br></br>Aerocity, New Delhi
              </h3>
            </div>

            <div>
              <img src="https://one8commune.co.in/wp-content/uploads/2024/03/DSC07198.webp"></img>
              <h3 className="location">
                ONE 8 COMMUNE <br></br>Kolkata
              </h3>
            </div>

            <div>
              <img src="https://one8commune.co.in/wp-content/uploads/2024/03/Copy-of-248531208_579873489736574_1019405788401332836_n.webp"></img>
              <h3 className="location">ONE 8 COMMUNE Pune</h3>
            </div>
          </div>
        </div>

        <div className="Restrofooter">
          <div className="restrofooter">
            <p>(Coming Soon: Hyderabad, Indore, Dubai & many more!)</p>
            <div className="moredata"><Link to={'/Restaurants'}>Click For More Info</Link></div>
          </div>
        </div>


      </div>
    </>
  );
}
