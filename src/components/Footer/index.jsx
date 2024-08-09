import { useState } from "react";

import companyLogo from "assets/images/companyLogo.svg";
import downArrow from "assets/images/downArrow.svg";

import "components/Footer/footer.scss";
import {
  footerIcons,
  footerListCompany,
  footerListResources,
  footerListWhyQoruz
} from "constants/footer";

import useScreenMobile from "hooks/useScreenMobile";

const Footer = () => {
  const [open, setOpen] = useState({
    company: false,
    whyQoruz: false,
    resources: false
  });

  const handleClick = (section) => {
    setOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  const isMobile = useScreenMobile({ size: 992 });

  const renderFooterList = (title, list, section) => (
    <ul className="footerListData">
      <span onClick={() => handleClick(section)}>
        {title}{" "}
        {isMobile && (
          <img
            src={downArrow}
            alt="Toggle section"
            style={{
              transform: open[section] ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease"
            }}
          />
        )}
      </span>
      {(isMobile ? open[section] : true) &&
        list.map((item, index) => <li key={index}>{item?.data}</li>)}
    </ul>
  );

  return (
    <footer className="footer">
      <div className="container footerData">
        <div className="footerLogo">
          <img src={companyLogo} alt="Company Logo" />
          <p className="footerLogoDescription">
            Qoruz is an influencer marketing and intelligence platform that
            enables superior influencer discovery and quick, easy influencer
            outreach.
          </p>

          {!isMobile && (
            <>
              <ul>
                {footerIcons.map((item, index) => (
                  <li key={index}>
                    <img src={item?.icon} alt="Footer Icon" />
                  </li>
                ))}
              </ul>

              <span className="footerLogoCopyrights">
                Qoruz India Pvt. Ltd.
              </span>
            </>
          )}
        </div>

        <div className="footerList">
          {renderFooterList("Company", footerListCompany, "company")}
          {renderFooterList("Why Qoruz", footerListWhyQoruz, "whyQoruz")}
          {renderFooterList("Resources", footerListResources, "resources")}
        </div>

        {isMobile && (
          <div className="mobileData">
            <span className="footerLogoCopyrights">
              {isMobile
                ? "Datrux Systems Pvt. Ltd. © 2022"
                : "Qoruz India Pvt. Ltd."}
            </span>
            <ul>
              {footerIcons.map((item, index) => (
                <li key={index}>
                  <img src={item?.icon} alt="Footer Icon" />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
