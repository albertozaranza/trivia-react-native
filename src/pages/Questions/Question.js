import React, { useState } from 'react';
import styled from 'styled-components/native';

import RadioButton from '@/components/smart/RadioButton';

const Question = () => {
  const [selectedOption, setSelectedOption] = useState();

  const handleOption = value => {
    setSelectedOption(value);
  };

  return (
    <StyledContainer>
      <StyledQuestionNumber>#1</StyledQuestionNumber>
      <StyledQuestion>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
        voluptas exercitationem numquam saepe est voluptatum velit iste?
        Dolorem, sit. Corporis officiis eligendi tempore laboriosam quaerat
        adipisci optio magni voluptas saepe!
      </StyledQuestion>
      <StyledRadioGroup>
        <RadioButton
          value='1'
          label='lorem 1'
          checked={selectedOption === '1'}
          onPress={handleOption}
        />
        <RadioButton
          value='2'
          label='lorem 2'
          checked={selectedOption === '2'}
          onPress={handleOption}
        />
        <RadioButton
          value='3'
          label='lorem 3'
          checked={selectedOption === '3'}
          onPress={handleOption}
        />
      </StyledRadioGroup>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 24px;
`;

const StyledQuestionNumber = styled.Text`
  font-weight: bold;
  font-size: 24px;
`;

const StyledQuestion = styled.Text`
  font-size: 18px;
  margin-top: 4px;
`;

const StyledRadioGroup = styled.View``;

export default Question;
