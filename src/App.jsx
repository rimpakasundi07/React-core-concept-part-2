import "./App.css";
import Counter from "./counter";
import Batsman from "./batsman";
import Users from "./users";
import { Suspense } from "react";
import Friends from "./friends";
// import Posts from "./posts";
import Players from "./players";
// import { Suspense } from "react";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

// const fetchPosts = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// };

function App() {
  // const postsPromise = fetchPosts;

  const friendsPromise = fetchFriends();

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
      <Players></Players>
      {/* <Suspense fallback={<h4>Post are coming ...</h4>}>
        {/* <Posts postsPromise={postsPromise}></Posts> */}
      {/* </Suspense> */}
      {/* <Suspense fallback={<h3>Loading ...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}
      {/* <Suspense fallback={<h3>Friends are coming for treat </h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}
      {/* <Batsman></Batsman> <br></br>
      <Counter></Counter> <br></br> */}
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
