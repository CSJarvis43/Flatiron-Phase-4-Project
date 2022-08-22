import React from 'react'
import { countState } from "../recoil/atoms";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

function Counter() {

  const count = useRecoilValue(countState);

  return (
    <div>
        <h1>Page Count: {count}</h1>
        {/* <button onClick={increment}>click me</button> */}
    </div>
  )
}

export default Counter