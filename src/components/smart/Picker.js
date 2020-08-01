import React, { useState } from 'react';
import { Picker as NativePicker } from '@react-native-community/picker';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Picker = ({ title, options }) => {
  const [selectedValue, setSelectedValue] = useState();

  return (
    <StyledContainer>
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

Picker.propTypes = {
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
`;

const StyledText = styled.Text`
  margin: 8px;
  font-size: 16px;
`;

const StyledPickerContainer = styled.View`
  padding: 2px 4px;
  border-color: #000;
  border-width: 1px;
  border-radius: 8px;
`;

export default Picker;
