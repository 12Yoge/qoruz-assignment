import brandLogo from "assets/images/qoruzCuratedLogo.svg";

import { brandCard, brandLocation } from "constants/brands";

import "components/Brands/brands.scss";
import useScreenMobile from "hooks/useScreenMobile";
import BrandCardMobile from "./BrandCardMobile";

const Brands = () => {
  const isMobile = useScreenMobile({ size: 992 });

  return (
    <>
      {!isMobile && (
        <div className="brandLogo">
          <div className="brandLogoData">
            <div>
              <img src={brandLogo} alt="qoruzCuratedLogo" />
              <div className="data">
                <span className="specialText">Curated by</span>
                <p>Qoruz</p>
              </div>
            </div>
            <span className="brandLogoUpdates">Updated on Feb 25th 2024</span>
          </div>
        </div>
      )}

      {isMobile ? (
        <BrandCardMobile />
      ) : (
        <section className="brand">
          <div className="container">
            {/* brandCard */}
            {brandCard.map((item, index) => (
              <div className="brandCard" key={index}>
                <div className="brandCardLogo">
                  <div className="brandCardLogoProfile">
                    <img src={item?.image} alt="brandLogoMSL" />
                    <img
                      className="verifiedLogo"
                      src={item?.verifiedLogo}
                      alt="verifiedLogo"
                    />
                  </div>
                  <div className="brandCardDetails">
                    <h3>{item?.title}</h3>
                    <div className="category">
                      <span>{item?.category1}</span>
                      <span>{item?.category2}</span>
                    </div>
                    <p>{item?.Para}</p>

                    <ul>
                      {brandLocation.map((item, index) => (
                        <li key={index}>
                          <img
                            className="svgIcon"
                            src={item?.image}
                            alt="locationIcon"
                          />
                          <span>{item?.locationName}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Button */}
                <div className="brandButton">
                  <button>
                    {item?.buttonName}
                    <img
                      className="img"
                      src={item?.icon}
                      alt="arrowBlackIcon"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Brands;
