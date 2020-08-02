import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import colors from '@/constants/colors';

const ProgressBar = ({
  amount = ['s', 'd', 'f', 'a', 'v', 's', 'd', 'f', 'a', 'v']
}) => {
  return (
    <StyledContainer>
      {amount.map(() => (
        <StyledProgress correct />
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
  background-color: ${({ correct }) =>
    correct ? colors.correct : colors.wrong};
`;

export default ProgressBar;
