import { useState } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Morning from "./Components/Morning";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Morning />
    </>
  );
}

export default App;
