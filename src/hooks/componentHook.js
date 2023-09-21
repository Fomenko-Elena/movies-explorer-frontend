import React from "react";

export function useMount() {
  const isMount = React.useRef(false);
  React.useEffect(() => { isMount.current = true }, []);
  return isMount.current;
}