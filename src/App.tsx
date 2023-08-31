import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Morning from "./Components/Morning";
import Main from "./Components/Main";
import axios from "axios";

function App() {
  const [count, setCount] = useState<string>("");
  useEffect(() => {
    axios
      .post("http://localhost:5000/user/register", {
        firstname: "Daniel",
        lastname: "Kolade",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <div className="">
        <Nav />
        <Morning />
        <Main />
        
      </div>
    </>
  );
}

export default App;
