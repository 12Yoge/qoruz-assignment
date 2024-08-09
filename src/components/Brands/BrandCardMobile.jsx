import { brandMobileCard, brandMobileLocation } from "constants/brands";

import brandLogo from "assets/images/qoruzCuratedLogo.svg";

const BrandCardMobile = () => {
  return (
    <section className="mobileBrand">
      <div className="mobileBrandContainer">
        {/* brandCard */}
        {brandMobileCard.map((item, index) => (
          <div className="mobileBrandCard" key={index}>
            <div className="profile">
              <img src={item?.image} alt="logo" />
              <div>
                <h3>{item?.title}</h3>
                <span>1,001-5,000 employees</span>
              </div>
            </div>

            <div className="category">
              <span>{item?.category1}</span>
              <span>{item?.category2}</span>
            </div>

            <p>{item?.Para}</p>

            <ul>
              {brandMobileLocation.map((item, index) => (
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

            <button>
              {item?.buttonName}
              <img className="img" src={item?.icon} alt="whiteIcon" />
            </button>
          </div>
        ))}

        <div className="brandLogoData mobileBrandLogo">
          <div>
            <img src={brandLogo} alt="qoruzCuratedLogo" />
            <div className="data">
              <span className="specialText">Curated by</span>
              <p>Qoruz</p>
              <label className="mobileBrandLogoPara">
                Updated on Feb 25th 2024
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCardMobile;
