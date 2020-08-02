import React, { useContext } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import QuestionsContext from '@/contexts/questions';

import colors from '@/constants/colors';

const handleColor = current => {
  if (current) return colors.currentProgress;
  return colors.defaultProgressColor;
};

const ProgressBar = ({ amount }) => {
  const { progress } = useContext(QuestionsContext);

  return (
    <StyledContainer>
      {amount.map(({ question }, index) => (
        <StyledProgress key={question} current={index === progress - 1} />
      ))}
    </StyledContainer>
  );
};

ProgressBar.propTypes = {
  amount: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object])
  ).isRequired
};

const StyledContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${colors.transparent};
`;

const StyledProgress = styled.View`
  height: 20px;
  width: 20px;
  border-radius: 24px;
  background-color: ${({ current }) => handleColor(current)};
`;

export default ProgressBar;
