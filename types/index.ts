import { ImageProps } from 'react-native';

type DateString = `${number}-${number}-${number}`;

type CurrencyCode = 'USD' | 'EGP' | 'AED' | 'GBP' | 'JPY' | 'CAD'; // TODO | Add support to more currencies

type Currency = {
  code: CurrencyCode,
  image: ImageProps,
  countryCode: string,
};

type Country = {
  name: string,
  code: string,
  currency: Currency;
};

type Rates = {
  [key in CurrencyCode]?: number;
};

type ExchangeRate = {
  base: CurrencyCode,
  date: DateString,
  rates: Rates
};

export {
  Country, Currency, CurrencyCode, ExchangeRate
};
