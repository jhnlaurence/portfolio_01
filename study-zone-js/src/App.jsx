import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Create from "./Create";
import Home from "./Home";
import Navbar from "./navbar";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/create" element={<Create />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
