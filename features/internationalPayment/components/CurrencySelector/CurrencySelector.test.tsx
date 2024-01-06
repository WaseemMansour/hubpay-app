import { fireEvent, render, waitFor } from "@testing-library/react-native";
import { CurrencySelector } from './CurrencySelector';


describe('Currency Input', () => {

  const changeCurrencyMockCB = jest.fn().mockImplementation(currency => console.log({ currency }));
	
	it('Should show currency flag and code', () => {
    const { getByTestId } = render(<CurrencySelector defaultCurrencyCode='AED' value={0} onAmountChange={() => {}} />);
		
    const currencyFlag = getByTestId('currency-flag');
		expect(currencyFlag).toBeDefined();

		const currencyCode = getByTestId('currency-code');
		expect(currencyCode).toBeDefined();
	})

  it('Should allow custom label', () => {
    const customLabel = 'No One Currency'
    const { getByTestId } = render(<CurrencySelector defaultCurrencyCode='AED' label={customLabel} value={0} onAmountChange={() => {}} />);

    const label = getByTestId('currency-input-label');
    expect(label.props.children).toEqual(customLabel);
  })

  it('Should allow user to change currency if option is active', () => {
    
    const { getByTestId, findByTestId } = render(<CurrencySelector defaultCurrencyCode='AED' value={0} onAmountChange={() => {}} onCurrencyChange={changeCurrencyMockCB} />);

    const currencySelectorModalTrigger = getByTestId('currency-selector-modal-trigger');

    fireEvent.press(currencySelectorModalTrigger);
    findByTestId('currency-item-USD').then(element => fireEvent.press(element));
    // fireEvent.press(usdCurrency);

    waitFor(() => {
      expect(changeCurrencyMockCB).toHaveBeenCalledWith('USD');
    }, { timeout: 2000 })

    
  })
	
})

