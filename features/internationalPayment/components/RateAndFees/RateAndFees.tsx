import { Image, Text, View } from 'react-native';
import { CurrencyCode } from '../../../../types';
import { DottedLineDots } from './DottedLineDots';
import { styles } from './styles';

type Props = {
  base: CurrencyCode,
  target: CurrencyCode,
  rate: number,
}

export const RateAndFees = ({ base, target, rate }: Props) => {
  return (
    <View style={styles.dottedLineContainer}>
      <View style={styles.dottedLine}>{DottedLineDots}</View>

      <View style={styles.container}>
        <View>
          <Text style={styles.info}>
            <Text style={styles.base}>1</Text> {base} = <Text style={styles.target}>{target} </Text> 
            <Text style={styles.rate}>{rate}</Text>
          </Text>
        </View>

        <View style={styles.feesWrapper}>
          <Text style={styles.fees}>Fees</Text>
          <Image source={require('../assets/down-arrow-dark.png')} style={styles.feesArrow} />
        </View>
      </View>
    </View>
  )
}