import React from 'react';
import styled from 'styled-components/native';

import Button from '@/components/dumb/Button';
import Picker from '@/components/smart/Picker';

import options from '@/constants/options';

const App = () => {
  return (
    <StyledView>
      <StyledTitle>Trivia</StyledTitle>
      <Picker title='Number of questions:' options={options.amount} />
      <Button marginTop={16} onPress={() => {}}>
        Start
      </Button>
    </StyledView>
  );
};

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 32px;
`;

const StyledTitle = styled.Text`
  font-size: 48px;
  margin-bottom: 48px;
`;

export default App;
