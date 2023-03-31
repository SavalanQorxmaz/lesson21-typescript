import Counter from "./components/Counter";
import Header from "./components/Header";
import {useState} from 'react'

function App() {

  const [count, setCount] = useState<number>(0)
  
  return (
    <div className="App">
      <Header count={count}/>
      <Counter count = {count} setCount = {setCount}/>
    </div>
  );
}

export default App;
