import { render } from "@testing-library/react-native";
import { CurrencyInput } from './CurrencyInput';


describe('Currency Input', () => {
	
	it('Should show currency flag and code', () => {
    const { getByTestId } = render(<CurrencyInput />);
		
    const currencyFlag = getByTestId('currency-flag');
		expect(currencyFlag).toBeDefined();

		const currencyCode = getByTestId('currency-code');
		expect(currencyCode).toBeDefined();
	})

  it('Should allow custom label', () => {
    const customLabel = 'No One Currency'
    const { getByTestId } = render(<CurrencyInput label={customLabel} />);

    const label = getByTestId('currency-input-label');
    expect(label.props.children).toEqual(customLabel);
  })
	
})
