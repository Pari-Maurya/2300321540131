import { Routes, Route, Link } from "react-router-dom";
import AllNotifications from "./pages/AllNotifications";
import PriorityNotifications from "./pages/PriorityNotifications";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Campus Notifications</h1>

      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">All Notifications</Link>
        {" | "}
        <Link to="/priority">Priority Notifications</Link>
      </nav>

      <Routes>
        <Route path="/" element={<AllNotifications />} />
        <Route path="/priority" element={<PriorityNotifications />} />
      </Routes>
    </div>
  );
}

export default App;