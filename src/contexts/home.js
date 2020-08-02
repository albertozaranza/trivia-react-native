import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [amount, setAmount] = useState(5);

  return (
    <HomeContext.Provider
      value={{
        amount,
        setAmount
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

HomeProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export default HomeContext;
