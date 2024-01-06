import { render } from "@testing-library/react-native";
import { CurrencySelector } from './CurrencySelector';


describe('Currency Input', () => {
	
	it('Should show currency flag and code', () => {
    const { getByTestId } = render(<CurrencySelector value={0} onAmountChange={() => {}} />);
		
    const currencyFlag = getByTestId('currency-flag');
		expect(currencyFlag).toBeDefined();

		const currencyCode = getByTestId('currency-code');
		expect(currencyCode).toBeDefined();
	})

  it('Should allow custom label', () => {
    const customLabel = 'No One Currency'
    const { getByTestId } = render(<CurrencySelector label={customLabel} value={0} onAmountChange={() => {}} />);

    const label = getByTestId('currency-input-label');
    expect(label.props.children).toEqual(customLabel);
  })
	
})

