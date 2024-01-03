
import App from "../../App";
import {render} from "@testing-library/react-native";
import InternationalPayment from ".";


describe('International Payment Screen', () => {
	it('Should have FROM Currency Input', () => {
		const { getByTestId } = render(<InternationalPayment />);
		const fromCurrencyInput = getByTestId('from-currency-input');
		expect(fromCurrencyInput).toBeDefined()
	})
})
