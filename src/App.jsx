import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [passLength, setPassLength] = useState(8);
  const [password, setPassword] = useState("");
  const [isNumberAllowed, setNumberAllowed] = useState(false);
  const [isSpecialCharAllowed, setSpecialCharAllowed] = useState(false);

  const passInput = useRef()

  const GeneratePassword = useCallback(
    (passLength) => {
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      const specialChar = "!@#$%^&*";
      const numbers = "0123456789";
      let password = "";
      if (isNumberAllowed) str += numbers;
      if (isSpecialCharAllowed) str += specialChar;

      for (let index = 0; index < passLength; index++) {
        let random = Math.floor(Math.random() * str.length + 1);
        password += str.charAt(random);
      }
      console.log(password);
      setPassword(password);
    },
    [passLength, isNumberAllowed, isSpecialCharAllowed]
  );

  useEffect(() => {
    GeneratePassword(passLength);
  }, [passLength, isNumberAllowed, isSpecialCharAllowed]);

  const copyToClipboard = ()=>{
    navigator.clipboard.writeText(passInput.current.value)
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <input readOnly ref={passInput} value={password} className="bg-transparent border-2" type="text" />
      <button onClick={copyToClipboard} className="cursor-pointer p-2 border-2">Copy</button>
      <input
        type="range"
        min={8}
        max={20}
        value={passLength}
        id="length"
        onChange={(e) => {
          setPassLength(e.currentTarget.value);
        }}
      />
      <label htmlFor="length">Length:{passLength} </label>
      <input
        type="checkbox"
        id="numbers"
        onChange={() => {
          setNumberAllowed((prevVal) => !prevVal);
        }}
      />
      <label htmlFor="numbers">Number</label>
      <input
        type="checkbox"
        id="specialChars"
        onChange={() => {
          setSpecialCharAllowed((prevVal) => !prevVal);
        }}
      />
      <label htmlFor="specialChars">Special Characters</label>
    </div>
  );
}

export default App;
