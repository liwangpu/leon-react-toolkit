import { useState } from 'react';
import * as _ from 'lodash';

export function useLocalStorage<V = any>(storageKey: string, defaultValue?: V): [V, (val: V) => void] {

  const [value, setValue] = useState<any>(localStorage.getItem(storageKey) ? JSON.parse(localStorage.getItem(storageKey)) as any : defaultValue);
  return [
    value,
    (val: V) => {
      setValue(val);
      if (_.isNil(val)) {
        localStorage.removeItem(storageKey);
      } else {
        localStorage.setItem(storageKey, JSON.stringify(val));
      }
    }
  ];
}