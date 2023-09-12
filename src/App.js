import "./App.css";
import AboutUs from "./Component/AboutUs";
import StudioProject from "./Pages/StudioProject";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<StudioProject />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
