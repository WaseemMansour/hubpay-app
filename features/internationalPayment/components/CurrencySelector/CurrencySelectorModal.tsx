import React from 'react';
import {
  FlatList, Modal, Pressable, Text, View
} from 'react-native';
import { CURRENCIES } from '../../../../lib/constants';
import { CurrencyCode } from '../../../../types';
import { CurrencyItem } from './CurrencyItem';


type Props = {
  baseCurrencyCode: CurrencyCode,
  isVisible: boolean,
  onChange: (currency: CurrencyCode) => void,
  onClose: () => void,
};

export const CurrencySelectorModal = ({
  baseCurrencyCode, isVisible, onChange, onClose,
}: Props) => {
  const filteredCountries = CURRENCIES.filter((currency) => currency.code !== baseCurrencyCode);
  return (

    <Modal
      style={ {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      } }
      visible={ isVisible }
      animationType='slide'
    >
      <View style={ {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 20,
        paddingTop: 100,
      } }
      >
        <View style={ { flex: 1, width: '100%' } }>
          <View style={ { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' } }>
            <View>
              <Text style={ {
                color: '#fff', textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginTop: 10, marginBottom: 20,
              } }
              >
                Select currency
              </Text>
            </View>
            <View>
              <Pressable onPress={ onClose }>
                <Text style={ { color: '#fff' } }>Cancel</Text>
              </Pressable>

            </View>
          </View>

          <FlatList
            data={ filteredCountries }
            renderItem={ (itemData) => (

              <View>
                <Pressable
                  onPress={ () => {
                    setTimeout(() => onChange(itemData.item.code), 300);
                  } }
                >
                  <View
                    style={ {
                      padding: 5,
                      paddingRight: 10,
                      paddingLeft: 10,
                    } }
                  >
                    <CurrencyItem currency={ itemData.item } />
                  </View>

                </Pressable>
              </View>

            ) }
          />
        </View>
      </View>
    </Modal>

  );
};
