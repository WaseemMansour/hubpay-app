import { fireEvent, render, waitFor } from "@testing-library/react-native";
import { TextMatch, TextMatchOptions } from "@testing-library/react-native/build/matches";
import { GetByQuery } from "@testing-library/react-native/build/queries/make-queries";
import { CommonQueryOptions } from "@testing-library/react-native/build/queries/options";
import { Calculator } from './Calculator';



describe('International Payment Screen', () => {
	
	let getByTestId: GetByQuery<TextMatch, CommonQueryOptions & TextMatchOptions>;
	beforeEach(() => {
		const utils = render(<Calculator/>);
		getByTestId = utils.getByTestId;
	});
	
	it('Should have FROM Currency Input', () => {
		const fromCurrencyInput = getByTestId('from-currency-input');
		expect(fromCurrencyInput).toBeDefined();
	})
	
	it('Should have TO Currency Input', () => {
		const toCurrencyInput = getByTestId('to-currency-input');
		expect(toCurrencyInput).toBeDefined();
	})
	
	it('Should show Conversion Rate + Fees', () => {
		const conversionRateFees = getByTestId('conversion-rate-and-fees');
		expect(conversionRateFees).toBeDefined();
	})
	
	it('Should show Processing Disclaimer', () => {
		const processingDisclaimer = getByTestId('processing-disclaimer');
		expect(processingDisclaimer).toBeDefined();
	})
	
	it('Should show Start Transfer CTA', () => {
		const startTransferCTA = getByTestId('start-transfer-cta');
		expect(startTransferCTA).toBeDefined();
	})

	it('Should retrieve exchange rate between base and target currencies', async () => {
		const fromAmount = 1000;
		const exchangeRateAmount = 3750;
		const baseCurrency = 'AED';
		const targetCurrency = 'USD';

		const fromCurrencyInput = getByTestId('from-currency-input');
		const toCurrencyInput = getByTestId('to-currency-input');

		fireEvent.changeText(fromCurrencyInput, fromAmount);
		
		await waitFor(()=> {
			// expect(getExchangeRate).toHaveBeenCalledWith(fromAmount, baseCurrency, targetCurrency);
			expect(toCurrencyInput).toEqual(exchangeRateAmount)
		})
		
	})
})
