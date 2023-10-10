import Header from "./Components/Header";
import SectionOne from "./Components/SectionOne";
import SectionThree from "./Components/SectionThree";
import SectionTwo from "./Components/SectionTwo";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
}

export default Home;
