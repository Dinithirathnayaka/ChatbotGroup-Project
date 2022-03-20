import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chatarea from "./pages/chatarea";
import LoginFrom from "./pages/loginForm";
import Thank from "./pages/thank";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginFrom />} />
          <Route path="/chatarea" element={<Chatarea />} />
          <Route path="/thank" element={<Thank />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
