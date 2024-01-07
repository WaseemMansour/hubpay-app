import { View } from 'react-native';
import { styles } from './styles';

export const DottedLineDots = Array.from({length: 18}, (_, index) => (
  <View key={index} style={styles.dottedLineDot}></View>
));