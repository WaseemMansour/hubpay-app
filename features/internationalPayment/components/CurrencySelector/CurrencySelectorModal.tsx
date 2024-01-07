import React from "react";
import { FlatList, Pressable, View } from "react-native";
import { Modal } from '../../../../components/Modal/Modal';
import { CURRENCIES } from "../../../../lib/constants";
import { CurrencyCode } from "../../../../types";
import { CurrencyItem } from "./CurrencyItem";
import { styles } from "./styles";

type Props = {
  baseCurrencyCode: CurrencyCode;
  isVisible: boolean;
  onChange: (currency: CurrencyCode) => void;
  onClose: () => void;
};

export const CurrencySelectorModal = ({
  baseCurrencyCode,
  isVisible,
  onChange,
  onClose,
}: Props) => {
  const filteredCountries = CURRENCIES.filter(
    (currency) => currency.code !== baseCurrencyCode
  );
  return (
    <Modal
      title='Select currency'
      onClose={onClose}
      isVisible={isVisible}
    >
      <FlatList
        data={filteredCountries}
        renderItem={(itemData) => (
          <View>
            <Pressable
              onPress={() => {
                setTimeout(() => onChange(itemData.item.code), 300);
              }}
            >
              <View style={styles.currencyItemWrapper}>
                <CurrencyItem currency={itemData.item} />
              </View>
            </Pressable>
          </View>
        )}
      />
    </Modal>
  );
};
