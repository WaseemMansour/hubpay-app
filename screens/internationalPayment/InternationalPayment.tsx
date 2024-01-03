import React from 'react'
import {Text, View} from "react-native";

export const InternationalPayment = () => {
	return (
		<View>
			<View testID='from-currency-input'>
				<Text>From Currency Input</Text>
			</View>
			<View testID='to-currency-input'>
				<Text>To Currency Input</Text>
			</View>
			<View testID='conversion-rate-and-fees'>
				<Text>Conversion Rate + Fees</Text>
			</View>
		</View>
	)
}
