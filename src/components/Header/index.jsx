import { useEffect, useState } from "react";

import { headerList } from "constants/header";
import useScreenMobile from "hooks/useScreenMobile";

import companyLogo from "assets/images/headerCompanyLogo.svg";
import blackArrow from "assets/images/buttonArrowBlack.svg";
import whiteArrow from "assets/images/buttonArrowWhite.svg";
import menuIcon from "assets/images/menu.svg";
import closeIcon from "assets/images/closeIcon.svg";

import "components/Header/header.scss";

const Header = () => {
  const isMobile = useScreenMobile({ size: 992 });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (isDropdownOpen) {
      document.body.classList.add("hide");
    } else {
      document.body.classList.remove("hide");
    }
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
                  {item?.image && <img src={item?.image} alt="downArrow" />}
                </li>
              ))}
            </ul>
          )}
        </div>

        {!isMobile && (
          <div className="headerButton">
            <button className="headerButtonLogin">
              Log in
              <img className="img" src={blackArrow} alt="blackArrow" />
            </button>
            <button className="headerButtonLogin free">
              Get started free
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
                  {item?.image && <img src={item?.image} alt="downArrow" />}
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
