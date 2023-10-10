import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="landing-container">
      <div className="landing-container-contract">
        <div className="landing-container-contract-header">
          <h2>From £17.99 A Month</h2>
          <h2>No Contract</h2>
        </div>
        <div className="landing-container-contract-button">
          <Link>Join Now</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
