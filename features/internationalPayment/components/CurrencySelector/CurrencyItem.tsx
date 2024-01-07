import React from 'react';
import {
  Image, Text, View
} from 'react-native';
import { Currency } from '../../../../types';
import {styles} from "./styles";

type Props = {
  currency: Currency
};

export const CurrencyItem = ({ currency }: Props) => (
  <View
    testID={`currency-item-${currency.code}`}
    style={ styles.currencyItemContainer}
  >
    <View testID='currency-flag' style={styles.currencyFlag}>
      <Image source={ currency.image } style={styles.currencyFlagImage} />
    </View>
    <View testID='currency-code'>
      <Text style={styles.currencyCode}>
        {currency.code}
      </Text>
    </View>
    
  </View>
);
