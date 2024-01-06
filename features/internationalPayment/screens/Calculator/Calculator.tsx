
import React, { useEffect, useState } from 'react';
import { Button, Text, View } from "react-native";
import { CurrencyCode } from '../../../../types';
import { CurrencySelector } from '../../components/CurrencySelector/CurrencySelector';
import { useGetExchangeRate } from '../../hooks/useGetExchangeRate';

export const Calculator = () => {
  const [baseCurrency] = useState<CurrencyCode>('AED');
  const [targetCurrency, setTargetCurrency] = useState<CurrencyCode>('EGP');
  const [baseAmount, setBaseAmount] = useState<number>(0);
  const [targetAmount, setTargetAmount] = useState<number>(0);
  const [rate, setRate] = useState<number>(1);

  const { data, isSuccess } =  useGetExchangeRate({ base: baseCurrency, target: targetCurrency })

  useEffect(() => {
    if(data && isSuccess) {
      setRate(data?.rates[targetCurrency]!);
    }
  }, [data, isSuccess])
  
	console.log(`Rate for ${baseCurrency} to ${targetCurrency} is : ${rate}`)

  const calculateTargetAmountByBase = (baseAmount: number, rate: number) => {
    if(!baseAmount) {
      setBaseAmount(0)
      setTargetAmount(0)
      return;
    };
    setBaseAmount(baseAmount);
    const targetAmount = (baseAmount * rate);
    setTargetAmount(targetAmount);
  };

  const calculateBaseAmountByTarget = (targetAmount: number, rate: number) => {
    if(!targetAmount) {
      setBaseAmount(0)
      setTargetAmount(0)
      return;
    }
    setTargetAmount(targetAmount);
    const baseAmount =  (targetAmount / rate);
    setBaseAmount(baseAmount);
  };



  return (
    <View>
      <View testID='from-currency-input'>
        <CurrencySelector 
          label='You send exactly'
          value={baseAmount} 
          onAmountChange={(amount) => calculateTargetAmountByBase(amount, rate)} 
        />
      </View>
      <View testID='to-currency-input'>
        <CurrencySelector 
          label='Recipient gets'
          value={targetAmount}
          onAmountChange={(amount) => calculateBaseAmountByTarget(amount, rate)} 
          onCurrencyChange={setTargetCurrency} 
        />
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


