import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./Components/MajorComponents/Nav";
import Morning from "./Components/MajorComponents/Morning";
import Main from "./Components/MajorComponents/Main";
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
        <div className=" px-20">
          <Morning />
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
