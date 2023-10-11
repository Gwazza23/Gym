import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";

function SectionFive() {
  return (
    <div className="home-section-five">
      <h2>Meet The Team</h2>
      <div className="trainers-section">
        <div className="trainer">
          <div className="splat-container">
            <img
              src="/media/paintsplat.webp"
              className="splat"
              alt=" "
              loading="lazy"
            />
          </div>
          <img src="/media/trainer1.webp" alt="Johnathan Doe" loading="lazy" />
          <div className="trainer-info">
            <h3>Johnathan Doe</h3>
            <h4>Crossfit Trainer</h4>
            <div className="trainer-socials">
              <AiOutlineFacebook />
              <AiOutlineTwitter />
              <AiOutlineInstagram />
              <AiOutlineMail />
            </div>
          </div>
        </div>
        <div className="trainer">
          <div className="splat-container">
            <img
              src="/media/paintsplat.webp"
              className="splat"
              alt=" "
              loading="lazy"
            />
          </div>
          <img src="/media/trainer2.webp" alt="Sarah Smith" loading="lazy" />
          <div className="trainer-info">
            <h3>Sarah Smith</h3>
            <h4>Personal Trainer</h4>
            <div className="trainer-socials">
              <AiOutlineFacebook />
              <AiOutlineTwitter />
              <AiOutlineInstagram />
              <AiOutlineMail />
            </div>
          </div>
        </div>
        <div className="trainer">
          <div className="splat-container">
            <img
              src="/media/paintsplat.webp"
              className="splat"
              alt=" "
              loading="lazy"
            />
          </div>
          <img src="/media/trainer3.webp" alt="Max Davies" loading="lazy" />
          <div className="trainer-info">
            <h3>Max Davies</h3>
            <h4>Calisthenics Trainer</h4>
            <div className="trainer-socials">
              <AiOutlineFacebook />
              <AiOutlineTwitter />
              <AiOutlineInstagram />
              <AiOutlineMail />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFive;
