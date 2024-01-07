import React from 'react';
import { GestureResponderEvent, Pressable, Text } from 'react-native';
import { styles } from './styles';

type Props = {
  title: string,
  onPress?: null | ((event: GestureResponderEvent) => void) | undefined;
}

export const Button = ({ onPress, title = 'Submit'}: Props) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}
