import React, { useState } from 'react';
import { Picker as NativePicker } from '@react-native-community/picker';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

import { handlePixels } from 'utils';
import colors from '@/constants/colors';

const Picker = ({
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  title,
  options
}) => {
  const [selectedValue, setSelectedValue] = useState();

  return (
    <StyledContainer
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
    >
      <StyledText>{title}</StyledText>
      <StyledPickerContainer>
        <NativePicker
          selectedValue={selectedValue}
          onValueChange={setSelectedValue}
          mode='dropdown'
        >
          {options.map(({ label, value }) => (
            <NativePicker.Item key={label} label={label} value={value} />
          ))}
        </NativePicker>
      </StyledPickerContainer>
    </StyledContainer>
  );
};

Picker.defaultProps = {
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0
};

Picker.propTypes = {
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.number
    })
  ).isRequired
};

const StyledContainer = styled.View`
  width: 100%;
  margin-top: ${({ marginTop }) => handlePixels(marginTop)};
  margin-bottom: ${({ marginBottom }) => handlePixels(marginBottom)};
  margin-right: ${({ marginRight }) => handlePixels(marginRight)};
  margin-left: ${({ marginLeft }) => handlePixels(marginLeft)};
`;

const StyledText = styled.Text`
  font-size: 16px;
`;

const StyledPickerContainer = styled.View`
  padding: 4px;
  border-bottom-color: ${colors.black};
  border-bottom-width: 1px;
`;

export default Picker;
