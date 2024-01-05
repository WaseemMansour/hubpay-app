import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { DismissKeyboardHOC } from './components/HOC/DismissKeyboard';
import InternationalPayment from "./screens/internationalPayment";

export default function App() {
  return (
    
      <View style={styles.container}>
        <StatusBar style="auto" />
        <DismissKeyboardHOC >
          <InternationalPayment />
        </DismissKeyboardHOC>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
