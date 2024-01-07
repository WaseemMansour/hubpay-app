import { Image, Text, View } from 'react-native';
import { Modal } from '../../../../components/Modal/Modal';
import { styles } from './styles';

type Props = {
  isTransferModalVisible: boolean
  onClose: () => void
};

export const TransferInitiated = ({ isTransferModalVisible, onClose }: Props) => {
  return (
    <Modal
        title='Transfer Initiated'
        onClose={onClose}
        isVisible={isTransferModalVisible}
      >
        <View style={styles.transferScreenImage}>
          <Image source={require('../../../../assets/currency-exchange.png')} />
        </View>
        <Text style={styles.transferScreenContent}>We've initiated payment transfer process.</Text>
        <Text style={styles.transferScreenContent}>Transaction status will be updated soon.</Text>
      </Modal>
  )
}