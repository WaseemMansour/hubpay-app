import React from "react";
import { FlatList, Modal, Pressable, Text, View } from "react-native";
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
      style={styles.currencyModal}
      visible={isVisible}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalInner}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderTitle}>
              Select currency
            </Text>
            <View>
              <Pressable onPress={onClose}>
                <Text style={{ color: "#fff" }}>Cancel</Text>
              </Pressable>
            </View>
          </View>

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
        </View>
      </View>
    </Modal>
  );
};
