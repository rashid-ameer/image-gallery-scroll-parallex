import { useEffect, useState } from "react";

export default function useDimension() {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function resize() {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setDimension({ width, height });
    }

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return dimension;
}
