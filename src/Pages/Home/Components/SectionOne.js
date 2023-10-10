import { Link } from "react-router-dom";

function SectionOne() {
  return (
    <div className="home-section-one">
      <div>
        <h2>Pick A Gym</h2>
        <p>
          Discover our state-of-the-art fitness centers conveniently located in
          your area. Whether you're looking for a high-energy environment or a
          peaceful workout space, we have a gym that suits your needs.
        </p>
        <Link>Find A Gym</Link>
      </div>
      <div>
        <h2>Student Memberships</h2>
        <p>
          At Evolv Fitness, we understand the importance of staying active while
          pursuing your education. That's why we offer a range of flexible and
          affordable student membership options to fit your needs and schedule.
        </p>
        <Link>Student Offers</Link>
      </div>
      <div>
        <h2>Flexibility At Heart</h2>
        <p>
          Discover the perfect membership plan to fit your fitness goals and
          lifestyle at Evolv Fitness. We offer a range of membership options
          designed to cater to your unique needs
        </p>
        <Link>Memberships</Link>
      </div>
    </div>
  );
}

export default SectionOne;
