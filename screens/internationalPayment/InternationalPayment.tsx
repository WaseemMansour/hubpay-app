import React from 'react';
import { Button, Text, View } from "react-native";
import { CurrencyInput } from '../../components/CurrencyInput/CurrencyInput';

export const InternationalPayment = () => {
	return (
		<View>
			<View testID='from-currency-input'>
				<CurrencyInput />
			</View>
			<View testID='to-currency-input'>
				<CurrencyInput />
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
