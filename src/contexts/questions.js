import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const QuestionsContext = createContext();

export const QuestionsProvider = ({ children }) => {
  const [amount, setAmount] = useState(5);
  const [progress, setProgress] = useState(1);

  return (
    <QuestionsContext.Provider
      value={{
        amount,
        progress,
        setAmount,
        setProgress
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};

QuestionsProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export default QuestionsContext;
