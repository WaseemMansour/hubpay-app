import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { DismissKeyboardHOC } from './components/HOC/DismissKeyboard';
import { HubpayLogo } from './components/HubpayLogo/HubpayLogo';
import InternationalPayment from "./features/internationalPayment";

export default function App() {
  
  const queryClient = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } });

  return (
    <QueryClientProvider client={ queryClient }>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <DismissKeyboardHOC >
          <HubpayLogo />
          <InternationalPayment />
        </DismissKeyboardHOC>
      </View>
    </QueryClientProvider>
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
