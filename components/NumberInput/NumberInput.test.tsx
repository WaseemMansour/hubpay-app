import { fireEvent, render, waitFor } from "@testing-library/react-native";
import { NumberInput } from './NumberInput';


describe('Number Input', () => {
	
	it('Should allow only latin numeric', () => {
    const testInputOne = 'johndoe';
    const testInputTwo = '5000.75';

    const { getByTestId } = render(<NumberInput />);
		
    const numberInput = getByTestId('number-input');
		expect(numberInput).toBeDefined();

    fireEvent.changeText(numberInput, testInputOne);
    expect(numberInput.props.value).toEqual('');

    fireEvent.changeText(numberInput, testInputTwo);
    expect(numberInput.props.value).toEqual(testInputTwo);

	})

  it('Should accept numeric in currency format', async () => {
    const testInputThree = '250650.827';
    const { getByTestId, findByTestId } = render(<NumberInput />);
    const numberInput = getByTestId('number-input');

    fireEvent.changeText(numberInput, testInputThree);
    fireEvent(numberInput, 'onEndEditing', { nativeEvent: { text: testInputThree } });

    await waitFor(() => {
      expect(numberInput.props.value).toEqual('250,650.83');
    }, { timeout: 500 });
  })

});