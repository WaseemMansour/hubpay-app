import React, { ReactNode } from "react";
import { ModalProps, Modal as NativeModal, Pressable, Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  title: string | ReactNode,
  children?: ReactNode,
  isVisible: boolean,
  onClose: () => void,
};

export const Modal  = ({
  title,
  children,
  isVisible,
  onClose,
}: Props & ModalProps) => {

  return (
    <NativeModal
      style={styles.modal}
      visible={isVisible}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalInner}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderTitle}>
              {title}
            </Text>
            <View>
              <Pressable onPress={onClose}>
                <Text style={{ color: "#fff" }}>Close</Text>
              </Pressable>
            </View>
          </View>

          <View>
            {children}
          </View>
        </View>
      </View>
    </NativeModal>
  );
};
