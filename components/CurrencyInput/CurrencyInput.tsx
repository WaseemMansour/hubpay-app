import { Text, View } from 'react-native'
import { NumberInput } from '../NumberInput/NumberInput'

type Props = {
  label?: string
}

export const CurrencyInput = ({ label = 'Currency' }: Props) => {

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
        <NumberInput />
      </View>
    </View>
  )
}