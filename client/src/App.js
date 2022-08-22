// client/src/components/App.js
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countState } from "./recoil/atoms";

function App() {
  // const [count, setCount] = useState(0)
  const [count, setCount] = useRecoilState(countState)
  // const count = useRecoilValue(countState);

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  function increment(){
    setCount(count + 1)

  }

  return (

    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route path="/">
            <h1>Page Count: {count}</h1>
            <button onClick={increment}>click me</button>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;