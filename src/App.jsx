function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <input className="bg-transparent border-2" type="text" />
      <button className="cursor-pointer p-2 border-2">Copy</button>
      <input type="range" id="length" />
      <label htmlFor="length">Length: </label>
      <input type="checkbox" id="numbers" />
      <label htmlFor="numbers">Number</label>
      <input type="checkbox" id="specialChars" />
      <label htmlFor="specialChars">Special Characters</label>
    </div>
  );
}

export default App;
