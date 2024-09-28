import React, { useState } from "react";
import data from "./data.json";
import Card from "./Card";
import { Link } from "react-router-dom";
import "./Restro.css";

export default function RestroPage() {
  const [FilterNameLocation, setFilterNameLocation] = useState(""); // For the user input
  const [filteredData, setFilteredData] = useState(data); // For storing filtered results
  // console.log(filteredData)
  // Function to handle the search button click
  const handleSearch = () => {
    // Filter the data based on the location input
    const filtered = data.filter(
      (val) =>
        val.name.toLowerCase().includes(FilterNameLocation.toLowerCase()) ||
        val.location.toLowerCase().includes(FilterNameLocation.toLowerCase())
    );
    // console.log(filtered)
    setFilteredData(filtered); // Update the filtered data state
  };

  // Function to sort the restaurants by rating in descending order
  const handleSortDescending = () => {
    const sortedData = [...filteredData].sort((a, b) => b.rating - a.rating);
    setFilteredData(sortedData); // Update the filtered data with sorted results
  };

  return (
    <>
      <div className="routepage">
        <div className="leftpart">
          <Link to={"/"}>
            <img
              className="routeimg"
              src="https://one8commune.co.in/wp-content/uploads/2024/03/One-8-commune-logo-2048x844.png"
              alt="Logo"
            ></img>
          </Link>

          {/* Input for location filter */}
          <input
            className="ipt"
            placeholder="Search for Restaurants"
            value={FilterNameLocation}
            onChange={(e) => setFilterNameLocation(e.target.value)} // Update filter value
          />

          {/* Search Button */}
          <div className="search" onClick={handleSearch}>
            Search
          </div>
        </div>

        <div className="rightpart">
          <div className="sort" onClick={handleSortDescending}>
            Sort Restaurants By Rating
          </div>
          <Link to={'/signup-login'}>
            <div className="logout">Logout</div>
          </Link>
        </div>
      </div>

      {/* Display filtered cards */}
      <div className="cards">
        {filteredData.length > 0 ? (
          filteredData.map((value) => (
            <div key={value.id} className="mapcard">
              <Card
                src1={value.image}
                name={value.name}
                location={value.location}
                rating={value.rating}
              />
            </div>
          ))
        ) : (
          <p>No restaurants found for this location.</p>
        )}
      </div>
    </>
  );
}
