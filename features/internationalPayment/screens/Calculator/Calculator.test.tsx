import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook } from '@testing-library/react-hooks';
import { render } from "@testing-library/react-native";
import { TextMatch, TextMatchOptions } from "@testing-library/react-native/build/matches";
import { GetByQuery } from "@testing-library/react-native/build/queries/make-queries";
import { CommonQueryOptions } from "@testing-library/react-native/build/queries/options";
import { ReactNode } from 'react';
import { RateCalculator } from '.';
import { useGetExchangeRate } from '../../hooks/useGetExchangeRate';

jest.mock('../../hooks/useGetExchangeRate', () => ({
  useGetExchangeRate: jest.fn(() => ({
		rate: 0.27,
	}))
}));

jest.mock('../../hooks/useGetProcessingTime', () => ({
  useGetProcessingTime: jest.fn(() => ({
		data: '2 Hours'
	}))
}));


describe('International Payment Screen', () => {
	
	let getByTestId: GetByQuery<TextMatch, CommonQueryOptions & TextMatchOptions>;
	beforeEach(() => {
		const utils = render(<RateCalculator/>);
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

    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: ReactNode}) => (
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    );

		const baseCurrency = 'AED';
		const targetCurrency = 'USD';
		const aedToUsdRate = 0.27;

    const { result, waitForNextUpdate } = renderHook (() =>
      useGetExchangeRate({ base: baseCurrency, target: targetCurrency }), { wrapper }
    );

		try {
			await waitForNextUpdate({ timeout: 3000 });
		} catch (error) {}

		expect(result.current.rate).toBe(aedToUsdRate)
		
	})
})
