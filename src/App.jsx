import React, { useEffect, useState } from "react";
import Counter from "./Counter/Counter.component";

async function fetchCount() {
  const URL = "https://ojl8h57z86.execute-api.us-east-1.amazonaws.com/app";

  const res = await fetch(URL);
  const data = await res.json();
  return data?.content?.count;
}

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchCount();
        console.log(data)
        setCount(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, [count]);

  return (
    <div className="app">
      
      <Counter count={count}/>
    </div>
  );
}

export default App;
