import "./App.css";
import { useState, useMemo, useCallback } from "react";
import Header from "./components/Header";

function App() {
  const [number, SetNumber] = useState(0);
  const [text, setText] = useState("");

  const increment = useCallback(() => {
       SetNumber((prevState) => prevState + 1); // buradaki yapı ile tekrar tekrar çağorma işlemi olmaz.
  },[])

  // const data = useMemo(() => {
  //   return calculateObject(number);
  // }, [number])
  return (
    <div className="App">
      <Header increment={increment} />
      <hr />
      <h1>{number}</h1>
      <input value={text} onChange={({ target }) => setText(target.value)} />
      <br /> <br />
     
    </div>
  );
}
// function calculateObject(number) {
//   console.log("Calculating");
//   for (let i = 0; i < 10000000; i++) {}
//   console.log("Calculating complated");
//   return { name: "Mehmet", number };
// }
export default App;
