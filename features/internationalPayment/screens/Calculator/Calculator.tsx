
import React, { useEffect, useState } from 'react';
import { View } from "react-native";
import { Button } from '../../../../components/Button/Button';
import { calculateBaseAmountByTarget, calculateTargetAmountByBase } from '../../../../lib/calculateRate';
import { CurrencyCode } from '../../../../types';
import { CurrencySelector } from '../../components/CurrencySelector/CurrencySelector';
import { ProcessingDisclaimer } from '../../components/ProcessingDisclaimer/ProcessingDisclaimer';
import { RateAndFees } from '../../components/RateAndFees/RateAndFees';
import { useGetExchangeRate } from '../../hooks/useGetExchangeRate';
import { TransferInitiated } from '../TransferInitiated/TransferInitiated';

export const Calculator = () => {
  const [isTransferModalVisible, setTransferModalVisible] = useState<boolean>(false);
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
  }, [data, isSuccess, targetCurrency])

  const reset = () => {
    setBaseAmount(0);
    setTargetAmount(0);
  }

  const handleCalculateTargetByBase = (baseAmount: number, rate: number) => {
    if(!baseAmount) {
      reset();
      return;
    };
    setBaseAmount(baseAmount);
    const targetAmount = calculateTargetAmountByBase(baseAmount, rate);
    setTargetAmount(targetAmount);
  };

  const handleCalculateBaseByTarget = (targetAmount: number, rate: number) => {
    if(!targetAmount) {
      reset();
      return;
    }
    setTargetAmount(targetAmount);
    const baseAmount =  calculateBaseAmountByTarget(targetAmount, rate);
    setBaseAmount(baseAmount);
  };

  useEffect(() => {
    handleCalculateTargetByBase(baseAmount, rate);
  }, [rate])

  const canTransfer =  baseAmount && targetAmount;

  return (
    <View>
      <View testID='from-currency-input'>
        <CurrencySelector 
          defaultCurrencyCode='AED'
          label='You send exactly'
          value={baseAmount} 
          onAmountChange={(amount) => handleCalculateTargetByBase(amount, rate)}
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
          onAmountChange={(amount) => handleCalculateBaseByTarget(amount, rate)} 
          onCurrencyChange={setTargetCurrency} 
        />
      </View>
      
      <View testID='processing-disclaimer'>
        <ProcessingDisclaimer base={baseCurrency} target={targetCurrency} />
      </View>
      <View testID='start-transfer-cta'>
        <Button title='Start transfer' disabled={!canTransfer} onPress={() => canTransfer && setTransferModalVisible(true)} />
      </View>
      <TransferInitiated
        isTransferModalVisible={isTransferModalVisible}
        onClose={() => {
          reset();
          setTransferModalVisible(false)
        }}
      />
    </View>
  )
};
