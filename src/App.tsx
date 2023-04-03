import Counter from "./components/Counter";
import Header from "./components/Header";
import TsState from "./ts-state/TsState";
import TsState2 from "./components/TsState";
import TsWithProps from "./ts-with-props/TsWithProps";
import {useState} from 'react'
import TsHTMLElement from "./components/TsHTMLElement";

function App() {

  const [count, setCount] = useState<number>(0)
  
  return (
    <div className="App">
      <Header count={count}/>
      <Counter count = {count} setCount = {setCount}/>
      <TsState/>
      <TsWithProps/>
      <TsState2/>
      <TsHTMLElement />
    </div>
  );
}

export default App;
