import "./App.css";

function App() {
  function handleClick() {
    alert("I am clicked.");
  }
  const handleClick3 = () => {
    alert("clicked 3");
  };

  return (
    <>
      <h3>Vite + React</h3>
      {/* <button onClick="handleClick()">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={function handleClick2() {
          alert("clicked 2");
        }}
      >
        Click Me 2{" "}
      </button>

      <button onClick={handleClick3}>Click Me 3</button>
      <button onClick={() => alert("click 4")}>Click Me 4</button>
    </>
  );
}

export default App;
