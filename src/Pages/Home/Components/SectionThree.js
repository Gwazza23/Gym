import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

function SectionThree() {
  const [src, setSrc] = useState("/media/section-three-vertical.webp");
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setSrc("/media/section-three-horizontal.webp");
      } else {
        setSrc("/media/section-three-vertical.webp");
      }
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="home-section-three">
      <div className="area-one">
        <h2>Who We Are</h2>
        <p>
          Discover Our Gym Family: Learn about our tight-knit fitness community
          where we foster a sense of belonging and support on your journey to
          health and wellness. Join us on the About page to meet our inspiring
          members and passionate team.
        </p>
        <Link>About Us</Link>
      </div>
      <div className="area-two">
        <img src={src} alt="section background" loading="lazy" />
      </div>
    </div>
  );
}

export default SectionThree;
