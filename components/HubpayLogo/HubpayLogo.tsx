import { Image, View } from 'react-native'
import { styles } from './styles'

export const HubpayLogo = () => {
  return (
    <View style={styles.logoWrapper}>
      <Image source={require('../../assets/hubpay-logo.png')} style={styles.logoImage} resizeMode='contain' />
    </View>
  )
}