import React from "react";

function SectionFour() {
  return (
    <div className="home-section-four">
      <h2>State Of The Art Equipment & Facilities</h2>
      <div className="home-section-four-equipment-list">
        <div className="equipment eq1">
          <img src="/media/squat-rack.webp" loading="lazy" alt="weighlifting area" />
          <p>Weightlifting Area</p>
        </div>
        <div className="equipment eq2">
          <img src="/media/weights.webp" loading="lazy" alt="free weights area" />
          <p>Free Weights</p>
        </div>
        <div className="equipment eq3">
          <img src="/media/treadmill.webp" loading="lazy" alt="cardio area" />
          <p>Cardio Area</p>
        </div>
        <div className="equipment eq4">
          <img src="/media/calisthenics.webp" loading="lazy" alt="calisthenics area" />
          <p>Calisthenics Area</p>
        </div>
        <div className="equipment eq5">
          <img src="/media/boxing.webp" loading="lazy" alt="sports training area" />
          <p>Sports Training Areas</p>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
