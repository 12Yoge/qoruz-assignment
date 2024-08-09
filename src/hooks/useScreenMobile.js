import { useEffect, useState } from "react";

const useScreenMobile = ({
  size = 768,
  mobileFunc = () => {},
  desktopFunc = () => {}
}) => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= size);

  useEffect(() => {
    // Function to handle screen resize
    const handleResize = () => {
      if (window.innerWidth <= size) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
      }
    };

    // Initial check
    handleResize();

    // Adding the resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the resize event listener
    return () => window.removeEventListener("resize", handleResize);
  }, [size]);

  useEffect(() => {
    if (isMobileView) {
      mobileFunc();
    } else {
      desktopFunc();
    }
  }, [isMobileView, mobileFunc, desktopFunc, size]);

  return isMobileView;
};

export default useScreenMobile;
