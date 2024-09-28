import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <div id="footer" className="footer">
        <div className="upperfooter">
          <div className="upperfooter1">
            <img
              className="logo"
              src="https://one8commune.co.in/wp-content/uploads/2024/03/One-8-commune-logo-2048x844.png"
            ></img>
            <br></br>
            <p className="par">
              We are fuelled by our passion for good food, great <br></br>people and a
              glorious time. Head over to the liveliest <br></br>commune in the city. 
              <br></br>
              <br></br>
              Neuma restaurant is a part of FOURLEAF CAFE & <br></br>RESTAURANTS PRIVATE
              LIMITED
            </p>

            <div className="socialmedia-link">
              <a className="anchor" href="https://www.facebook.com/one8commune/">
                <img
                  className="imagelink"
                  src="https://one8commune.co.in/wp-content/uploads/2024/03/facebook.png"
                ></img>
              </a>

              <a className="anchor" href="https://www.instagram.com/one8.commune/">
                <img
                  className="imagelink"
                  src="https://one8commune.co.in/wp-content/uploads/2024/03/Instagram.png"
                ></img>
              </a>

              <a className="anchor" href="https://twitter.com/one8world">
                <img
                  className="imagelink"
                  src="https://one8commune.co.in/wp-content/uploads/2024/03/Twitter.png"
                ></img>
              </a>
            </div>
          </div>
          <div className="upperfooter2">
            <h3>ADDRESS</h3>
            FOURLEAF CAFE & RESTAURANTS PRIVATE LIMITED <br></br> 
            <br></br>
            GST: 27AAECF8881H1Z6 <br></br>
            <br></br>
            Ground floor, Gauri Kunj, Kalakar Kiskhorkumar Ganguli <br></br> 
            <br></br>
            Marg, Kalakar
            Kiskhorkumar Ganguly Road, Juhu Tara  <br></br>
            <br></br>
            Road, Mumbai City, Maharashtra,
            400049
          </div>
          <div className="upperfooter3">
            <h3>CONTACT</h3>
            Mail: contact@one8commune.co.in <br></br>
            <br></br>
            
             WhatsApp: +918108451818
          </div>
        </div>

        <div className="lowerfooter">
          © One8 Commune 2024. All rights reserved.
        </div>
      </div>
    </>
  );
}
