import { StyleSheet } from 'react-native';
import { theme } from '../../../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingRight: 5,
    marginBottom: 20,
    position: 'relative'
  },
  currencyBox: {
    backgroundColor: theme.colors.primaryColor, 
    width: '40%', 
    padding: 10,
    paddingHorizontal: 15, 
    borderRadius: 10,
    position: 'relative',
  },
  currencyInputWrapper: {
    width: '56%',
    marginTop: 5,
  },
  currencyInput: {
    paddingTop: 5, 
    paddingHorizontal: 5, 
    height: 50,
    lineHeight: 36,
    textAlign: 'right',
    fontSize: 30,
    fontWeight: '600',
    width: '90%'
  },
  label: { 
    color: '#fff', 
    marginBottom: 5,
  },
  currencyTriggerWrapper: {
    flexDirection: 'row', 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    position: 'relative',
  },
  currencyTrigger: {
    marginLeft: 5,
    position: 'absolute',
    left: 70,
    top: 2,
    padding: 5,
    width: 20,
    height: 20,
  },
});

export { styles };
