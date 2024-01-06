import { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { FakeCurrencyInput } from 'react-native-currency-input';
import { CURRENCIES } from '../../../../lib/constants';
import { CurrencyCode } from '../../../../types';
import { CurrencyItem } from './CurrencyItem';
import { CurrencySelectorModal } from './CurrencySelectorModal';
import { styles } from './styles';

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
    <View style={styles.container}>
      <View style={styles.currencyBox}>
        <View style={ styles.label }>
          <Text testID='currency-input-label' style={{ color: '#fff'}}>
            {label}
          </Text>
        </View>


        <View>
          <View>
            <CurrencyItem currency={currentCurrency} />
          </View>
          {onCurrencyChange
            ? (

              <View testID='currency-selector-modal-trigger' style={styles.currencyTrigger}>

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
      
      <View style={styles.currencyInputWrapper}>
        <FakeCurrencyInput
          style={styles.currencyInput}
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