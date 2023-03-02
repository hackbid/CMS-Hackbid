import { useState } from "react";
import Login from "./pages/Login/Login.jsx";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/*<Login />*/}
      <AdminDashboard />
    </>
  );
}

export default App;
