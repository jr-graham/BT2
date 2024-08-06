import { useContext } from 'react';
import { ConfigContext } from '../features/Auth/contexts/ConfigContext';

// ==============================|| CONFIG - HOOKS ||============================== //

export default function useConfig() {
  return useContext(ConfigContext);
}
