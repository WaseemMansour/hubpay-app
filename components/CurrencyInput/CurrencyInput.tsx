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
        <TextInput placeholder='250,000' value='500,000.00' />
      </View>
    </View>
  )
}