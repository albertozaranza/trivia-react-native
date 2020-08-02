import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import colors from '@/constants/colors';

const RadioButton = ({ checked, label, value, onPress }) => {
  return (
    <StyledContainer onPress={() => onPress(value)}>
      <StyledOptionContainer>
        <StyledButton>{checked && <StyledCheckedButton />}</StyledButton>
        <StyledText>{label}</StyledText>
      </StyledOptionContainer>
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
  align-items: center;
`;

const StyledButton = styled.View`
  height: 24px;
  width: 24px;
  margin: 8px 8px 8px 0;
  border-width: 1.5px;
  border-color: ${colors.defaultButton};
  border-radius: 16px;
  background-color: ${colors.transparent};
  position: relative;
`;

const StyledCheckedButton = styled.View`
  height: 14px;
  width: 14px;
  border-radius: 8px;
  background-color: ${colors.defaultButton};
  position: absolute;
  top: 3.5px;
  left: 3.5px;
`;

const StyledText = styled.Text`
  font-size: 16px;
`;

export default RadioButton;
