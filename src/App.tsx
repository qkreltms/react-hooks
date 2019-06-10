import React, { useState } from 'react';
import './App.css';

const useInput = (initValue: string, validator?: (value: string) => boolean) => {
  const [value, setValue] = useState<string>(initValue)
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event; //event안의 target 속성안의 value를 가져옴
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) setValue(value);
  }
  return { value, onChange }
}

const App = () => {
  const checkEmail = (value: string) => value.includes("@")
  const name = useInput("Mr. ", checkEmail);

  return (
    <>
      <input placeholder="Name" value={name.value} onChange={name.onChange} />
    </>
  )
}
export default App;
