import { Text, TextInput, View } from 'react-native'

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
            Currency Flag
          </View>
          <View testID='currency-code'>
            Currency Code
          </View>
        </View>
      </View>
      
      <View>
        <TextInput placeholder='250,000' value='500,000.00' />
      </View>
    </View>
  )
}