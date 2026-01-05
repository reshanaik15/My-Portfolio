import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type LocationState = {
  scrollTo?: string;
};

export default function ScrollToTop() {
  const location = useLocation();

  const state = location.state as LocationState | null;

  useEffect(() => {
    if (state?.scrollTo) {
      const element = document.getElementById(state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location, state]);

  return null;
}
