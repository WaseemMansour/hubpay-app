import { ReactNode } from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';

type Props = {
  children: ReactNode
}

export const DismissKeyboardHOC = ({ children }: Props) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={{flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center'}}>
      {children}
    </View>
  </TouchableWithoutFeedback>
)