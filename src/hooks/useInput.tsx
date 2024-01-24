import { useState, ChangeEvent, Dispatch, SetStateAction } from 'react';

function useInput(defaultValue: string = ''): [string, (event: ChangeEvent<HTMLInputElement>) => void, Dispatch<SetStateAction<string>>] {
  const [value, setValue] = useState<string>(defaultValue);

  function handleValueChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return [value, handleValueChange, setValue];
}

export default useInput;