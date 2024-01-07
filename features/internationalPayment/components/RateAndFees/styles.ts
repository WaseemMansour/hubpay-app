import { StyleSheet } from 'react-native';
import { theme } from '../../../../theme';

const styles = StyleSheet.create({
  dottedLineContainer : {
    position: 'relative', 
    overflow: 'hidden'
  },
  dottedLine: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
    width: 5,
    height: 50,
  },
  dottedLineDot: {
    width: 3,
    height: 3,
    backgroundColor: 'grey',
    borderRadius: 100,
    marginBottom: 3,
  },
  container: {
    backgroundColor: theme.colors.neutrals[100],
    borderRadius: 10, 
    padding: 5,
    paddingHorizontal: 20,
    flexDirection: 'row',
    fllex: 1,
    height: 40,
    marginVertical: 25,
    marginTop: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'flex-end',
    width: '95%'
  },
  info: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.neutrals[900],
    lineHeight: 30
  },
  base: {
    fontWeight: '900'
  },
  target: {
    fontSize: 18,
  },
  rate: {
    fontSize: 20,
    fontWeight: '700'
  },
  feesWrapper: {
    flexDirection: 'row'
  },
  fees: {
    color: theme.colors.primaryColor,
    fontWeight: '600',
    marginRight: 5
  },
  feesArrow: {
    width: 16, 
    height: 16, 
    marginTop: 2
  }
})

export { styles };
