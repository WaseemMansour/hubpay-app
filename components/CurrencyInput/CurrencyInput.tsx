import { TextInput, View } from 'react-native'

export const CurrencyInput = () => {

  return (
    <View>
      <View>
        <View testID='currency-flag'>
          Currency Flag
        </View>
        <View testID='currency-code'>
          Currency Code
        </View>
      </View>
      <View>
        <TextInput placeholder='250,000' value='500,000.00' />
      </View>
    </View>
  )
}