/**
 *
 * Components
 * JSX
 * Props
 * State
 * Events
 * [ Conditional Rendering]
 *
 */

/**
 *  1. API : url : https://jsonplaceholder.typicode.com/users
 */

// How to do fetch

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => console.log(data));

// Array function

const loadData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = res.json();
  return data;
};
