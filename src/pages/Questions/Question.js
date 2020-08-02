import React, {
  Fragment,
  useState,
  useContext,
  useLayoutEffect,
  useCallback
} from 'react';
import decode from 'entities-decode';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import RadioButton from '@/components/smart/RadioButton';
import Line from '@/components/dumb/Line';

import QuestionsContext from '@/contexts/questions';

const Question = ({
  question: {
    question,
    difficulty,
    correct_answer: correctAnswer,
    incorrect_answers: incorrectAnswers
  }
}) => {
  const [selectedOption, setSelectedOption] = useState();
  const [options, setOptions] = useState([{ value: 0, label: '' }]);

  const { progress } = useContext(QuestionsContext);

  const handleOption = value => {
    setSelectedOption(value);
  };

  const mixOptions = useCallback(() => {
    const arr = [];
    const randomLength = incorrectAnswers.length + 1;
    const randomNumber = Math.floor(Math.random() * randomLength);
    arr[randomNumber] = { value: randomNumber, label: correctAnswer };
    let j = 0;
    for (let i = 0; i < randomLength; i += 1) {
      if (arr[i] === undefined) {
        arr[i] = { value: i, label: incorrectAnswers[j] };
        j += 1;
      }
    }
    return setOptions(arr);
  }, [correctAnswer, incorrectAnswers]);

  useLayoutEffect(() => {
    mixOptions();
  }, [mixOptions]);

  return (
    <StyledContainer>
      <StyledQuestionNumber>{`#${progress} - ${difficulty}`}</StyledQuestionNumber>
      <StyledQuestion>{decode(question)}</StyledQuestion>
      <StyledRadioGroup>
        {options.map(({ value, label }, index) => (
          <Fragment key={label}>
            {index !== 0 && <Line marginTop={4} marginBottom={4} />}
            <RadioButton
              value={value}
              label={label}
              checked={selectedOption === value}
              onPress={handleOption}
            />
          </Fragment>
        ))}
      </StyledRadioGroup>
    </StyledContainer>
  );
};

Question.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string,
    difficulty: PropTypes.string,
    correct_answer: PropTypes.string,
    incorrect_answers: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
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
  margin: 8px 0;
  font-size: 18px;
`;

const StyledRadioGroup = styled.View``;

export default Question;
