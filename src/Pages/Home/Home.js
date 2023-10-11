import Divider from "./Components/Divider";
import Header from "./Components/Header";
import SectionFive from "./Components/SectionFive";
import SectionFour from "./Components/SectionFour";
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
      <Divider />
      <SectionFour />
      <SectionFive />
    </div>
  );
}

export default Home;
