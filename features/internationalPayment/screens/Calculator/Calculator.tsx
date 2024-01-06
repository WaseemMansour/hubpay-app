
import React, { useState } from 'react';
import { Button, Text, View } from "react-native";
import { CurrencyInput } from '../../../../components/CurrencyInput/CurrencyInput';
import { CurrencyCode } from '../../../../types';
import { useGetExchangeRate } from '../../hooks/useGetExchangeRate';

export const Calculator = () => {
  const [baseCurrency] = useState<CurrencyCode>('AED');
  const [targetCurrency, setTargetCurrency] = useState<CurrencyCode>('EGP');

  const { data } =  useGetExchangeRate({ base: baseCurrency, target: targetCurrency })
  
	
  return (
    <View>
      <View testID='from-currency-input'>
        <CurrencyInput label='You send exactly' />
      </View>
      <View testID='to-currency-input'>
        <CurrencyInput label='Recipient gets' />
      </View>
      <View testID='conversion-rate-and-fees'>
        <Text>Conversion Rate + Fees</Text>
      </View>
      <View testID='processing-disclaimer'>
        <Text>Processing Disclaimer</Text>
      </View>
      <View testID='start-transfer-cta'>
        <Button title='Start Transfer' />
      </View>
    </View>
  )
}


