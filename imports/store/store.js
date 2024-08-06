import { create } from 'zustand';
import { callPromise } from './callPromise';

import { stockStore } from './stockStore';
import { econStore } from './econStore';
import { menuStore } from './menuStore';

const useStore = create((set, get) => ({
  ...stockStore(set, get),
  ...econStore(set, get),
  ...menuStore(set, get)
}));

export default useStore;

// {
//   stocks: {
//     symbolQueue: ['AAPL', 'GOOGL', 'MSFT'],
//       data: {
//       AAPL: {
//         incomeStatement: [{ year: 2022, revenue: 100000, income: 50000 }],
//           balanceSheet: [{ year: 2022, assets: 200000, liabilities: 100000 }],
//           cashFlow: [{ year: 2022, cashFlow: 30000 }],
//           segment: [{ region: 'US', revenue: 70000 }],
//       },
//       GOOGL: {
//         incomeStatement: [{ year: 2022, revenue: 150000, income: 70000 }],
//           balanceSheet: [{ year: 2022, assets: 250000, liabilities: 120000 }],
//           cashFlow: [{ year: 2022, cashFlow: 40000 }],
//           segment: [{ region: 'Europe', revenue: 50000 }],
//       },
//       MSFT: {
//         incomeStatement: [{ year: 2022, revenue: 200000, income: 90000 }],
//           balanceSheet: [{ year: 2022, assets: 300000, liabilities: 150000 }],
//           cashFlow: [{ year: 2022, cashFlow: 60000 }],
//           segment: [{ region: 'Asia', revenue: 80000 }],
//       },
//     },
//     isLoading: { incomeStatement: false, balanceSheet: false, cashFlow: false, segment: false },
//     isError: { incomeStatement: false, balanceSheet: false, cashFlow: false, segment: false },
//   },
//   econ: {
//     indicatorQueue: ['GDP', 'Inflation'],
//       data: {
//       GDP: [{ year: 2022, value: 21000 }],
//         Inflation: [{ year: 2022, rate: 2.5 }],
//     },
//     isLoading: { GDP: false, Inflation: false },
//     isError: { GDP: false, Inflation: false },
//   },
//   macro: {
//     macroQueue: ['Unemployment', 'InterestRates'],
//       data: {
//       Unemployment: [{ year: 2022, rate: 5.0 }],
//         InterestRates: [{ year: 2022, rate: 0.75 }],
//     },
//     isLoading: { Unemployment: false, InterestRates: false },
//     isError: { Unemployment: false, InterestRates: false },
//   }
// }