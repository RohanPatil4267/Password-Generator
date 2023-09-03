import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [passLength, setPassLength] = useState(8);
  const [password, setPassword] = useState("");
  const [isNumberAllowed, setNumberAllowed] = useState(false);
  const [isSpecialCharAllowed, setSpecialCharAllowed] = useState(false);

  const passInput = useRef();

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

  const copyToClipboard = () => {
    navigator.clipboard.writeText(passInput.current.value);
  };

  return (
    <div
      className="flex flex-col gap-2
     bg-customBackgroundColor justify-center 
     items-center min-h-screen"
    >
      <h1
        className="text-customTextColor font-bold 
      font-yeseva-One text-xl sm:text-4xl"
      >
        Password Generator
      </h1>
      <div
        class="font-josefin-Sans flex flex-col p-6 bg-gray-700
       bg-opacity-30  border border-gray-200 rounded-lg shadow-2xl"
      >
        {/* Read-Only Inputs */}
        <div className="flex flex-col sm:flex-row gap-1">
          <input
            readOnly
            ref={passInput}
            value={password}
            className="border-2 sm:w-[400px] 
            rounded-md px-4 py-2 text-customTextColor 
            font-semibold outline-none"
            type="text"
          />
          <button
            onClick={copyToClipboard}
            className="cursor-pointer border-2 sm:w-[100px]
            hover:bg-customPrimaryColor rounded-md
            px-4 py-2 text-white font-semibold"
          >
            Copy
          </button>
        </div>
        {/* Actions Inputs */}
        <div className="flex flex-col mt-4 gap-1 justify-center items-start ">
          <div className="flex flex-row gap-2">
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
            <label htmlFor="length">Length: {passLength} </label>
          </div>
          <div className="flex flex-row gap-2">
            <input
              type="checkbox"
              id="numbers"
              onChange={() => {
                setNumberAllowed((prevVal) => !prevVal);
              }}
            />
            <label htmlFor="numbers">Number</label>
          </div>
          <div className="flex flex-row gap-2">
            <input
              type="checkbox"
              id="specialChars"
              onChange={() => {
                setSpecialCharAllowed((prevVal) => !prevVal);
              }}
            />
            <label htmlFor="specialChars">Special Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
