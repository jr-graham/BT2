import { create } from 'zustand';
import { callPromise } from './callPromise';

const defaultDataStructure = {
  incomeStatement: [],
  balanceSheet: [],
  cashFlow: [],
  segment: [],
};

export const stockStore = (set, get) => ({
  stocks: {
    symbolQueue: [],
    data: {},
    isLoading: {},
    isError: {},
  },
  updateStockData: async (symbol, attributes) => {
    const { symbolQueue, data } = get().stocks;

    set((state) => ({
      stocks: {
        ...state.stocks,
        isLoading: { ...state.stocks.isLoading, ...attributes.reduce((acc, attr) => ({ ...acc, [attr]: true }), {}) },
      },
    }));

    try {
      const newData = await callPromise('updateStockData', symbol, attributes);

      // Ensure each symbol has the default structure
      let symbolData = { ...defaultDataStructure, ...data[symbol] };
      attributes.forEach((attr) => {
        symbolData[attr] = newData[attr];
      });

      let updatedSymbolQueue = [...symbolQueue, symbol];
      let updatedData = { ...data, [symbol]: symbolData };

      // If more than three symbols, remove the oldest
      if (updatedSymbolQueue.length > 3) {
        const oldestSymbol = updatedSymbolQueue.shift();
        delete updatedData[oldestSymbol];
      }

      set((state) => ({
        stocks: {
          ...state.stocks,
          symbolQueue: updatedSymbolQueue,
          data: updatedData,
          isLoading: { ...state.stocks.isLoading, ...attributes.reduce((acc, attr) => ({ ...acc, [attr]: false }), {}) },
        },
      }));
    } catch (error) {
      set((state) => ({
        stocks: {
          ...state.stocks,
          isError: { ...state.stocks.isError, ...attributes.reduce((acc, attr) => ({ ...acc, [attr]: true }), {}) },
          isLoading: { ...state.stocks.isLoading, ...attributes.reduce((acc, attr) => ({ ...acc, [attr]: false }), {}) },
        },
      }));
    }
  },
});

export default create(stockStore);