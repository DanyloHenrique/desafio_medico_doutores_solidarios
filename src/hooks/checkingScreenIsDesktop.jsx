import { useEffect, useState } from "react";

export function useCheckingScreenIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const checkingWidthScreen = () => {
      {
        window.innerWidth > 768 ? setIsDesktop(true) : setIsDesktop(false);
      }
    };

    checkingWidthScreen();

    window.addEventListener("resize", checkingWidthScreen);
    return () => {
      window.removeEventListener("resize", checkingWidthScreen);
    };
  }, []);

  return isDesktop;
}
