import React, { useEffect } from "react";

interface UsekeyDownProps {
  callback: (e: React.KeyboardEvent) => void;
}

const useKeyDown = ({ callback }: UsekeyDownProps) => {
  useEffect(() => {
    const handleKeyDown = (e) => callback(e);

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [callback]);
};

export default useKeyDown;