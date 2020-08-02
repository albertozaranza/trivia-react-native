import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const RadioButton = ({ checked, label, value, onPress }) => {
  return (
    <StyledContainer onPress={() => onPress(value)}>
      {checked ? (
        <StyledOptionContainer>
          <StyledText>checked </StyledText>
          <StyledText>{label}</StyledText>
        </StyledOptionContainer>
      ) : (
        <StyledOptionContainer>
          <StyledText>unchecked </StyledText>
          <StyledText>{label}</StyledText>
        </StyledOptionContainer>
      )}
    </StyledContainer>
  );
};

RadioButton.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const StyledContainer = styled.TouchableOpacity`
  width: 100%;
`;

const StyledOptionContainer = styled.View`
  flex-direction: row;
`;

const StyledText = styled.Text``;

export default RadioButton;
