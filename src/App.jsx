import React, { useEffect, useState } from "react";

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
      <span className="count">{count}</span>
      <p className="text">people have visited this page</p>
    </div>
  );
}

export default App;
