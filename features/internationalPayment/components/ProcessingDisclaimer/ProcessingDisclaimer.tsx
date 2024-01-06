import React from 'react';
import {
  Image, Text, View
} from 'react-native';
import { CurrencyCode } from '../../../../types';
import { useGetProcessingTime } from '../../hooks/useGetProcessingTime';

type Props = {
  base: CurrencyCode,
  target: CurrencyCode,
};

export const ProcessingDisclaimer = ({ base, target }: Props) => {
  const { data, isFetching } = useGetProcessingTime({ base, target });

  return (
    <View 
      style={ {
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 20,
      } }
    >
      {isFetching 
      ? <Text>Loading ...</Text> : 
        <>
          <View style={{ flexDirection: 'row', marginBottom: 10}}>
            <Image source={require('./assets/flash.png')} />
            <Text style={{ fontSize: 18, fontWeight: '600', marginLeft: 5}}>Processing time - {data}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: '#777'}}>*</Text>
            <Text style={{ color: '#777'}}>
              Normal working hours & public holidays apply
            </Text>
          </View>
        </>
      }
    
    </View>
  )
};
