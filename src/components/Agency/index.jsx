import { useState } from "react";
import { hoverData } from "constants/blogCard";
import useScreenMobile from "hooks/useScreenMobile";

import whiteArrow from "assets/images/buttonArrowWhite.svg";
import agencyImg from "assets/images/agencyImg.png";
import agencyMobileImg from "assets/images/agencyMobileImg.png";
import hoverIcon from "assets/images/hoverIcon.svg";

import "components/Agency/agency.scss";

const Agency = () => {
  const [showList, setShowList] = useState(false);
  const isMobile = useScreenMobile({ size: 992 });

  const handleMouseEnter = () => {
    setShowList(true);
  };

  const handleMouseLeave = () => {
    setShowList(false);
  };

  return (
    <section className="agency">
      <div className="agencyContainer">
        <div className="agencyData">
          <h2>Are you an agency?</h2>
          <p>Join the Qoruz agency partnership programme!</p>

          <div className="agencyButton">
            <button>
              Register Now
              <img src={whiteArrow} alt="blackArrow" />
            </button>

            <span
              className="whyRegister"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Why Register?
            </span>

            {showList && (
              <>
                <img
                  className="agencyButtonHoverImg"
                  src={hoverIcon}
                  alt="hoverIcon"
                />
                <ul>
                  {hoverData.map((item, index) => (
                    <li key={index}>
                      <img src={item?.image} alt="checkIcon" />
                      <span>{item?.name}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        <div className="agencyImg">
          <img src={isMobile ? agencyMobileImg : agencyImg} alt="agencyImg" />
        </div>
      </div>
    </section>
  );
};

export default Agency;
