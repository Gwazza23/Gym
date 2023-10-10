import "./Home.css";
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home-container">
      <div className="landing-container">
        <div className="landing-container-contract">
          <div className="landing-container-contract-header">
            <h2>From £17.99 A Month</h2>
            <h2>No Contract</h2>
          </div>
          <div className="landing-container-contract-button" >
            <Link>Join Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
