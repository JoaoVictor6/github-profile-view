import { useEffect, useState } from "react";

export default function UseScrollTop(){
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    function onScroll() {
      const currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
      setScrollTop(currentPosition);
    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return {scrollTop};
}