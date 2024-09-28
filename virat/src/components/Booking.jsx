import React from "react";
import "./Booking.css";

export default function Booking() {
  return (
    <>
      <div className="booking">
        <h3>BOOK YOUR TABLE</h3>
        <div className="innerbooking">
          <form>
            <div className="upperform">
              <input type="text" placeholder="Your Name"></input>
              <input type="text" placeholder="Phone Number"></input>
              <div>
                <lable>Location</lable>
                <select>
                  <option>Select Location</option>
                  <option>Juhu, Mumbai</option>
                  <option>Aerocity, New Delhi</option>
                  <option>Kolkata</option>
                  <option>Pune</option>
                </select>
              </div>
            </div>

            <div className="middleform">
              <div>
                <lable>People</lable>
                <select>
                  <option>People</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>3+</option>
                </select>
              </div>

              <div>
                <label>Date</label>
                <input type="date" placeholder="Date"></input>
              </div>
            </div>

            <div className="lowerform">
              <button>BOOK A TABLE</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
