import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();
  console.log(location.pathname);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // 👆 you can change "instant" → "smooth" if you want smooth scroll
  }, [location]);

  return null;
}
