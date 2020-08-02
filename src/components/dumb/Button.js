import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import colors from '@/constants/colors';

import { handlePixels } from '@/utils';

const Button = ({
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  backgroundColor,
  children,
  onPress
}) => {
  return (
    <StyledButton
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      backgroundColor={backgroundColor}
      onPress={onPress}
    >
      <StyledText>{children}</StyledText>
    </StyledButton>
  );
};

Button.defaultProps = {
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  backgroundColor: colors.defaultButton
};

Button.propTypes = {
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  backgroundColor: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  onPress: PropTypes.func.isRequired
};

const StyledButton = styled.TouchableOpacity`
  width: 200px;
  height: 48px;
  justify-content: center;
  align-items: center;
  margin-top: ${({ marginTop }) => handlePixels(marginTop)};
  margin-bottom: ${({ marginBottom }) => handlePixels(marginBottom)};
  margin-right: ${({ marginRight }) => handlePixels(marginRight)};
  margin-left: ${({ marginLeft }) => handlePixels(marginLeft)};
  border-radius: 24px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const StyledText = styled.Text`
  color: ${colors.white};
`;

export default Button;
