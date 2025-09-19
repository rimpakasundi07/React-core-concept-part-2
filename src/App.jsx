import "./App.css";
import Counter from "./counter";
import Batsman from "./batsman";
import Users from "./users";
import { Suspense } from "react";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

function App() {
  function handleClick() {
    alert("I am clicked.");
  }
  const handleClick3 = () => {
    alert("clicked 3");
  };
  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };

  return (
    <>
      <h3>Vite + React</h3>
      <Suspense fallback={<h3>Loading ...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>
      <Batsman></Batsman> <br></br>
      <Counter></Counter> <br></br>
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
      <button onClick={() => handleAdd5(10)}>Click add 5</button>
    </>
  );
}

export default App;
