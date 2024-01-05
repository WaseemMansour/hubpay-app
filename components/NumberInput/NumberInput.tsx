import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { currencyFormatter } from '../../utils/currencyFormatter';

type Props = {
  onChange?: (value: string) => void,
  placeholder?: string,
}

export const NumberInput = ({ onChange, placeholder }: Props) => {
  const [value, setValue] = useState<string>('');

  const handleTextChange = (text: string) => {
    const numericValue = text.replace(/[^0-9.]/g, '');
    setValue(numericValue);
    
    onChange?.(Number(numericValue).toFixed(2));
  };

  const handleOnBlur = (text: string) => {
    const formattedValue = currencyFormatter(text);
    setValue(formattedValue);
  }

  return (
    <TextInput
      testID='number-input'
      value={value}
      onChangeText={handleTextChange}
      onEndEditing={(e) => handleOnBlur(e.nativeEvent.text)}
      keyboardType="numeric"
      placeholder={placeholder ?? 'Enter amount'}
      autoFocus={false}
      style={{borderWidth: 1, borderStyle: 'solid', borderColor: '#333', padding: 5, paddingHorizontal: 10, marginVertical: 10}}
    />
  );
};
