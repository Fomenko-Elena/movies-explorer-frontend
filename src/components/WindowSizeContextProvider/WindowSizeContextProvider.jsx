import React, { useEffect, useRef, useState } from "react";
import { WindowSizeContext } from "../../contexts/WindowSizeContext";

export function WindowSizeContextProvider({
  children,
}) {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  const throttleInProgressRef = useRef()

  function handleWindowResize() {
    if (throttleInProgressRef.current === true) return;

    throttleInProgressRef.current = true;

    setTimeout(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        throttleInProgressRef.current = false;
      }, 
      700);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return (
    <WindowSizeContext.Provider value={{ width: width, height: height }}>
      {children}
    </WindowSizeContext.Provider>
   )
}

export default WindowSizeContextProvider