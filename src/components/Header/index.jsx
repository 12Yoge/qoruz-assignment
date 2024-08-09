import companyLogo from "assets/images/headerCompanyLogo.svg";
import blackArrow from "assets/images/buttonArrowBlack.svg";
import whiteArrow from "assets/images/buttonArrowWhite.svg";
import downArrow from "assets/images/headerDownArrow.svg";
import menuIcon from "assets/images/menu.svg";
import closeIcon from "assets/images/closeIcon.svg";

import { headerList } from "constants/header";

import "components/Header/header.scss";
import useScreenMobile from "hooks/useScreenMobile";
import { useEffect, useState } from "react";

const Header = () => {
  const isMobile = useScreenMobile({ size: 992 });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (isDropdownOpen) {
      document.body.classList.add("hide");
    } else {
      document.body.classList.remove("hide");
    }
    // Cleanup function to remove the class when component unmounts
    return () => {
      document.body.classList.remove("hide");
    };
  }, [isDropdownOpen]);

  const handleMenuClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div className="container headerContainer">
        <div className="headerList">
          <img src={companyLogo} alt="companyLogo" />

          {!isMobile && (
            <ul>
              {headerList.map((item, index) => (
                <li key={index}>
                  {item?.name}
                  <img src={downArrow} alt="downArrow" />
                </li>
              ))}
            </ul>
          )}
        </div>

        {!isMobile && (
          <div className="headerButton">
            <button className="headerButtonLogin">
              Login
              <img className="img" src={blackArrow} alt="blackArrow" />
            </button>
            <button className="headerButtonLogin free">
              Get started Free
              <img className="img" src={whiteArrow} alt="whiteArrow" />
            </button>
          </div>
        )}

        {isMobile && (
          <img
            className="menuIcon"
            src={isDropdownOpen ? closeIcon : menuIcon}
            alt="menuIcon"
            onClick={handleMenuClick}
          />
        )}
      </div>

      {isMobile && isDropdownOpen && (
        <div className="headerMobileMenu">
          <div className="headerList">
            <ul>
              {headerList.map((item, index) => (
                <li key={index}>
                  {item?.name}
                  <img src={downArrow} alt="downArrow" />
                </li>
              ))}
            </ul>
            <div className="headerButton">
              <button className="headerButtonLogin">
                Login
                <img className="img" src={blackArrow} alt="blackArrow" />
              </button>
              <button className="headerButtonLogin free">
                Get started Free
                <img className="img" src={whiteArrow} alt="whiteArrow" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
