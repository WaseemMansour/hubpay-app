import { Text, View } from 'react-native';
import CurrencyInput from 'react-native-currency-input';
import { CurrencyCode } from '../../../../types';

type Props = {
  label?: string,
  value: number,
  onCurrencyChange?: (currency: CurrencyCode) => void,
  onAmountChange: (amount: number) => void,
}

export const CurrencySelector = ({ label = 'Currency', value, onCurrencyChange, onAmountChange }: Props) => {

  return (
    <View>
      <View>
        <View>
          <Text testID='currency-input-label'>
            {label}
          </Text>
        </View>
        <View>
          <View testID='currency-flag'>
            <Text>
              Currency Flag
            </Text>
          </View>
          <View testID='currency-code'>
            <Text>
              Currency Code
            </Text>
          </View>
        </View>
      </View>
      
      <View>
        <CurrencyInput
          style={{ borderWidth: 1, borderStyle: 'solid', borderColor: 'red', padding: 0, paddingHorizontal: 5, height: 30}}
          value={value}
          onChangeValue={onAmountChange}
          delimiter=","
          separator="."
        />
      </View>
      
    </View>
  )
}