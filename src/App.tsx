import Counter from "./components/Counter";
import Header from "./components/Header";
import {useState} from 'react'
import TsWithProps from "./ts-with-props/TsWithProps";
import TsState from "./ts-state/TsState";

function App() {

  const [count, setCount] = useState<number>(0)
  
  return (
    <div className="App">
      <Header count={count}/>
      <Counter count = {count} setCount = {setCount}/>
      <TsWithProps/>
      <TsState/>

    </div>
  );
}

export default App;
