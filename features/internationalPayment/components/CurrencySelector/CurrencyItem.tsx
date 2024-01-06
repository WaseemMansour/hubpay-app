import React from 'react';
import {
  Image, Text, View
} from 'react-native';
import { Currency } from '../../../../types';

type Props = {
  currency: Currency
};

export const CurrencyItem = ({ currency }: Props) => (
  <View 
    testID={`currency-item-${currency.code}`}
    style={ {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    } }
  >
    <View testID='currency-flag' style={ { width: 30, height: 30, marginRight: 10 } }>
      <Image source={ currency.image } style={ { height: 20, width: 30, marginTop: 5 } } />
    </View>
    <View testID='currency-code'>
      <Text style={ { color: '#000', fontWeight: '500' } }>{currency.code}
        currency-item-{currency.code}
      </Text>
    </View>
    
  </View>
);
