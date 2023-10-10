import Header from "./Components/Header";
import SectionOne from "./Components/SectionOne";
import SectionTwo from "./Components/SectionTwo";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <Header />
      <SectionOne />
      <SectionTwo />
    </div>
  );
}

export default Home;
