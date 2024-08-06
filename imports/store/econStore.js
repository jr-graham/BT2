import { callPromise } from './callPromise';

export const econStore = (set, get) => ({
  econ: {
    indicatorQueue: [],
    data: {},
    isLoading: {},
    isError: {},
  },
  fetchEconData: async (indicator, methodName) => {
    set((state) => ({
      econ: {
        ...state.econ,
        isLoading: { ...state.econ.isLoading, [indicator]: true },
      },
    }));
    try {
      const currentState = get().econ;
      if (currentState.data[indicator]) {
        set((state) => ({
          econ: {
            ...state.econ,
            isLoading: { ...state.econ.isLoading, [indicator]: false },
          },
        }));
        return;
      }

      const newData = await callPromise(methodName, indicator);
      set((state) => ({
        econ: {
          ...state.econ,
          data: {
            ...state.econ.data,
            [indicator]: newData,
          },
          isLoading: { ...state.econ.isLoading, [indicator]: false },
        },
      }));
    } catch (error) {
      set((state) => ({
        econ: {
          ...state.econ,
          isError: { ...state.econ.isError, [indicator]: true },
          isLoading: { ...state.econ.isLoading, [indicator]: false },
        },
      }));
    }
  },
});
