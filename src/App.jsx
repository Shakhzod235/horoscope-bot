import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Description from "./pages/Description";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={<Home />}
          />
          <Route
            path="/description/"
            element={<Description />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
