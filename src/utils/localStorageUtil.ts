import type { TOptsForm } from '@/types/types';

export function localStorageUtil(): {
  saveData: (data: TOptsForm) => void;
  getData: () => TOptsForm | null;
} {
  const saveData = (data: TOptsForm): void => {
    localStorage.setItem('form-saved-data', JSON.stringify(data));
  };

  const getData = (): TOptsForm | null => {
    const loadedData = localStorage.getItem('form-saved-data');
    return loadedData ? JSON.parse(loadedData) : null;
  };

  return Object.freeze({
    saveData,
    getData,
  });
}
