import { fireEvent, render } from "@testing-library/react-native";
import { NumberInput } from './NumberInput';


describe('Number Input', () => {
	
	it('Should allow only latin numeric', () => {
    const testInputOne = 'johndoe';
    const testInputTwo = '5000.75'

    const { getByTestId } = render(<NumberInput />);
		
    const numberInput = getByTestId('number-input');
		expect(numberInput).toBeDefined();

    fireEvent.changeText(numberInput, testInputOne);
    expect(numberInput.props.value).toEqual('');

    fireEvent.changeText(numberInput, testInputTwo);
    expect(numberInput.props.value).toEqual(testInputTwo);

	})

});