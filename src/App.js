import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const App = () => {
  return (
    <StyledView>
      <Text>Trivia</Text>
    </StyledView>
  );
};

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default App;
