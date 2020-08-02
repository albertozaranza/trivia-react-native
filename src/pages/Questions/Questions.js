import React from 'react';
import styled from 'styled-components/native';

import ProgressBar from '@/components/dumb/ProgressBar';

import colors from '@/constants/colors';

import Question from './Question';

const Questions = () => {
  return (
    <StyledContainer>
      <ProgressBar />
      <Question />
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
  background-color: ${colors.white};
`;

export default Questions;
