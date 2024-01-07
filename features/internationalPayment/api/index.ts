import { CurrencyCode, ExchangeRate } from '../../../types';
import { AED_RATES } from './mockData';

export const internationalPaymentApi = {
  getExchangeRate: (base: CurrencyCode, target: CurrencyCode): Promise<ExchangeRate> =>
    new Promise((res) => {
      setTimeout(() => {
        res(AED_RATES)
      }, 50)
    }),
  getProcessingTime: (base: CurrencyCode, target: CurrencyCode): Promise<string> =>
    new Promise((res) => {
      setTimeout(() => {
        const randomHours = Math.ceil(Math.random() * 10);
        res(`${randomHours} Hour${randomHours > 1 ? 's' : ''}`)
      }, 50)
    })
}