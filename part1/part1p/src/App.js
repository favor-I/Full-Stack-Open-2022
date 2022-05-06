import React from "react";
import Cards from "./components/Cards"
// import { ReactDOM } from "react";

const Hello = () => {
  return (
    <>
      <p>Hello World this is the hello component</p>
    </>
  );
}

const App = () => {
  console.log("Hello from components!!!");
  const date = new Date();
  const a =20;
  const b = 32;
  return (
    <div>
      <Cards name="Card One" button = "Buy"/>
      <Hello />
      <p>Hello World! It's now {date.toString()}</p>
      <p>{a} + {b} = {a+b}</p>
    </div>
  );
}

export default App;
