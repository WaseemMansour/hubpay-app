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
  currencyModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 20,
    paddingTop: 100,
    backgroundColor: theme.colors.primaryColor
  },
  modalInner: {
    flex: 1, width: '100%'
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalHeaderTitle: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 20,
  },
  currencyItemWrapper: {
    padding: 5,
    paddingRight: 10,
    paddingLeft: 10,
    borderColor: theme.colors.secondaryColor,
    borderStyle: "solid",
    borderWidth: 1,
    marginBottom: 10,
  },
  currencyItemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  currencyFlag: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  currencyFlagImage: {
    height: 20,
    width: 30,
    marginTop: 5
  },
  currencyCode: {
    color: '#fff',
    fontWeight: '500'
  }
});

export { styles };
