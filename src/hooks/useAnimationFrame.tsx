import { useEffect, useRef } from "react";

function useAnimationFrame(callback: () => void) {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function animate() {
      if (savedCallback.current) {
        savedCallback.current();
      }
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }, []);
}

export default useAnimationFrame;