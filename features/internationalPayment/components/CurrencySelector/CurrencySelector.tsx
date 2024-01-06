import { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import CurrencyInput from 'react-native-currency-input';
import { CURRENCIES } from '../../../../lib/constants';
import { CurrencyCode } from '../../../../types';
import { CurrencyItem } from './CurrencyItem';
import { CurrencySelectorModal } from './CurrencySelectorModal';

type Props = {
  label?: string,
  value: number,
  defaultCurrencyCode: CurrencyCode,
  onCurrencyChange?: (currency: CurrencyCode) => void,
  onAmountChange: (amount: number) => void,
}

export const CurrencySelector = ({ 
  label = 'Currency', 
  value, 
  defaultCurrencyCode = 'AED',
  onCurrencyChange, 
  onAmountChange 
}: Props) => {

  const defaultCurrency = CURRENCIES.find((currency) => currency?.code === defaultCurrencyCode) ?? CURRENCIES[0];
  const [currentCurrency, setCurrency] = useState(defaultCurrency);
  const [showCurrencySelector, setShowCurrencySelector] = useState<boolean>(false);

  const handleCurrencyChange = (currencyCode: CurrencyCode) => {
    const currency = CURRENCIES.find((currency) => currency.code === currencyCode);
    if (currency && onCurrencyChange) {
      setCurrency(currency);
      onCurrencyChange(currency.code);
    }
    setShowCurrencySelector(false);
  };

  return (
    <View>
      <View>
        <View>
          <Text testID='currency-input-label'>
            {label}
          </Text>
        </View>


        <View>
          <View>
            <CurrencyItem currency={currentCurrency} />
          </View>
          {onCurrencyChange
            ? (

              <View testID='currency-selector-modal-trigger' style={{ backgroundColor: 'purple'}}>

                <Pressable onPress={ () => {
                  setShowCurrencySelector(true);
                } }
                >
                  <Image source={ require('../assets/down-arrow.png') } />
                </Pressable>

              </View>
            )
            : null}
        </View>

      </View>
      
      <View>
        <CurrencyInput
          style={{ borderWidth: 1, borderStyle: 'solid', borderColor: 'red', padding: 0, paddingHorizontal: 5, height: 30}}
          value={value}
          onChangeValue={onAmountChange}
          delimiter=","
          separator="."
        />
        <CurrencySelectorModal
          baseCurrencyCode='AED'
          isVisible={ showCurrencySelector }
          onChange={ handleCurrencyChange }
          onClose={ () => setShowCurrencySelector(false) }
        />
      </View>

    </View>
  )
}