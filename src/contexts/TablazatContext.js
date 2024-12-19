import React, { createContext, useState, useContext } from 'react';

const TablazatContext = createContext();

export const TablazatProvider = ({ children }) => {
  const [selectedRecept, setSelectedRecept] = useState(null);

  return (
    <TablazatContext.Provider value={{ selectedRecept, setSelectedRecept }}>
      {children}
    </TablazatContext.Provider>
  );
};

export const useTablazatContext = () => useContext(TablazatContext);