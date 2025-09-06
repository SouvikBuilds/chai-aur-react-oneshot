import React, { useState } from "react";

import Countcontext from "./countcontext";

const CountcontextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <Countcontext.Provider value={{ count, setCount }}>
      {children}
    </Countcontext.Provider>
  );
};

export default CountcontextProvider;
