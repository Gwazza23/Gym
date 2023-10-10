import React from "react";

function SectionTwo() {
  return (
    <div className="home-section-two">
      <div className="home-section-two-map-container">
        <iframe
          title="Evolv Locations"
          className="home-section-two-map"
          src="https://www.google.com/maps/d/u/0/embed?mid=1xRRnxWmgfZ6by3K4Csx8bjqDpBPS5ew&ehbc=2E312F&noprof=1"
        ></iframe>
        <h2>Find A Gym Near You</h2>
        <p>
          Evolv Fitness currently offers 8 Locations in England with plans to
          expand to further locations in England and UK!
        </p>
      </div>
    </div>
  );
}

export default SectionTwo;
