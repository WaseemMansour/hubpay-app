import {render} from "@testing-library/react-native";
import InternationalPayment from ".";
import {GetByQuery} from "@testing-library/react-native/build/queries/make-queries";
import {TextMatch, TextMatchOptions} from "@testing-library/react-native/build/matches";
import {CommonQueryOptions} from "@testing-library/react-native/build/queries/options";


describe('International Payment Screen', () => {
	
	let getByTestId: GetByQuery<TextMatch, CommonQueryOptions & TextMatchOptions>;
	beforeEach(() => {
		const utils = render(<InternationalPayment/>);
		getByTestId = utils.getByTestId;
	});
	
	it('Should have FROM Currency Input', () => {
		const fromCurrencyInput = getByTestId('from-currency-input');
		expect(fromCurrencyInput).toBeDefined()
	})
	
	it('Should have TO Currency Input', () => {
		const toCurrencyInput = getByTestId('to-currency-input');
		expect(toCurrencyInput).toBeDefined()
	})
	
	it('Should show Conversion Rate + Fees', () => {
		const conversionRateFees = getByTestId('conversion-rate-and-fees');
		expect(conversionRateFees).toBeDefined()
	})
})
