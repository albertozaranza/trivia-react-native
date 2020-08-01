import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Button = ({ children, onPress }) => {
  return (
    <StyledButton onPress={onPress}>
      <StyledText>{children}</StyledText>
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  onPress: PropTypes.func.isRequired
};

const StyledButton = styled.TouchableOpacity`
  width: 100px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #007bff;
`;

const StyledText = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export default Button;
