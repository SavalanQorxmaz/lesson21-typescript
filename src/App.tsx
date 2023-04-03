import Counter from "./components/Counter";
import Header from "./components/Header";
import {useState} from 'react'
import TsState from "./components/TsState";

function App() {

  const [count, setCount] = useState<number>(0)
  
  return (
    <div className="App">
      <Header count={count}/>
      <Counter count = {count} setCount = {setCount}/>
      <TsState/>

    </div>
  );
}

export default App;
