import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

import ProgressBar from '@/components/dumb/ProgressBar';

import QuestionsContext from '@/contexts/questions';

import colors from '@/constants/colors';

import questions from '@/questions.json';
import Question from './Question';

const Questions = () => {
  const { goBack } = useNavigation();

  const { amount, progress, setProgress } = useContext(QuestionsContext);

  const handleBack = () => {
    switch (progress) {
      case 1:
        return goBack();
      default:
        return setProgress(progress - 1);
    }
  };

  return (
    <StyledContainer>
      <ProgressBar amount={questions.results} />
      <Question question={questions.results[progress - 1]} />
      <StyledProgressContainer>
        <StyledButton onPress={handleBack}>
          <StyledText>Back</StyledText>
        </StyledButton>
        <StyledButton
          disabled={progress === amount}
          onPress={() => setProgress(progress + 1)}
        >
          <StyledText>Confirm</StyledText>
        </StyledButton>
      </StyledProgressContainer>
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

const StyledProgressContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledButton = styled.TouchableOpacity.attrs({
  delayPressIn: 0
})`
  height: 33px;
  width: 90px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${colors.defaultButton};
`;

const StyledText = styled.Text`
  color: ${colors.white};
`;

export default Questions;
