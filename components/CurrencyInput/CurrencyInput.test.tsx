import { render } from "@testing-library/react-native";
import { TextMatch, TextMatchOptions } from "@testing-library/react-native/build/matches";
import { GetByQuery } from "@testing-library/react-native/build/queries/make-queries";
import { CommonQueryOptions } from "@testing-library/react-native/build/queries/options";
import { CurrencyInput } from './CurrencyInput';


describe('Currency Input', () => {
	
	let getByTestId: GetByQuery<TextMatch, CommonQueryOptions & TextMatchOptions>;
	beforeEach(() => {
		const utils = render(<CurrencyInput/>);
		getByTestId = utils.getByTestId;
	});
	
	it('Should show currency flag and code', () => {
		const currencyFlag = getByTestId('currency-flag');
		expect(currencyFlag).toBeDefined();
		const currencyCode = getByTestId('currency-code');
		expect(currencyCode).toBeDefined();
	})
	
})
