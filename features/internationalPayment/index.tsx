import { View } from 'react-native';
import { RateCalculator } from './screens/Calculator';

const InternationalPayment = () => {
  return (
    <View style={{ width: '90%', marginVertical: 0, marginHorizontal: '5%' }}>
      <RateCalculator />
    </View>
  )
}

export default InternationalPayment;
