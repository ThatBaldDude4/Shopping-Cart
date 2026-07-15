import { Outlet } from "react-router";
import { useState } from "react";

function App() {
    const [mockData, setMockData] = useState(0);

  return (
    <Outlet context={{mockData, setMockData}}/>
  )
}

export default App
