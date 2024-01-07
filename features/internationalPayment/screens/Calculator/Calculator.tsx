
import React from 'react';
import { View } from "react-native";
import { CurrencyCode } from '../../../../types';
import { CurrencySelector } from '../../components/CurrencySelector/CurrencySelector';
import { RateAndFees } from '../../components/RateAndFees/RateAndFees';

type Props = {
  baseCurrency: CurrencyCode,
  targetCurrency: CurrencyCode,
  baseAmount: number,
  targetAmount: number,
  rate: number,
  onBaseAmountChange: (amount: number, rate: number) => void,
  onTargetAmountChange: (amount: number, rate: number) => void,
  onCurrencyChange: (currency: CurrencyCode) => void
}

export const Calculator = ({ 
  baseCurrency,
  targetCurrency,
  baseAmount,
  targetAmount,
  rate,
  onBaseAmountChange,
  onTargetAmountChange,
  onCurrencyChange
}: Props) => {
  

  return (
    <View>
      <View testID='from-currency-input'>
        <CurrencySelector 
          defaultCurrencyCode='AED'
          label='You send exactly'
          value={baseAmount} 
          onAmountChange={(amount) => onBaseAmountChange(amount, rate)}
        />
      </View>
      <View testID='conversion-rate-and-fees'>
        <RateAndFees base={baseCurrency} target={targetCurrency} rate={rate} />
      </View>
      <View testID='to-currency-input'>
        <CurrencySelector 
          defaultCurrencyCode='EGP'
          label='Recipient gets'
          value={targetAmount}
          onAmountChange={(amount) => onTargetAmountChange(amount, rate)} 
          onCurrencyChange={onCurrencyChange} 
        />
      </View>
    </View>
  )
};
