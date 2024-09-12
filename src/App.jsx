import { useState } from "react";
import Ginti from "./Ginti";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Ginti />
    </div>
  );
}

export default App;
