import React from 'react';
import { GestureResponderEvent, Pressable, Text } from 'react-native';
import { styles } from './styles';

type Props = {
  title: string,
  onPress?: null | ((event: GestureResponderEvent) => void) | undefined;
  disabled?: boolean
}

export const Button = ({ onPress, title = 'Submit', disabled}: Props) => {
  return (
    <Pressable style={[styles.button, disabled && styles.buttonDisabled]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}
