import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Materials from "./pages/Materials.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/*URL PARAMS */}
        <Route path="/materials" element={<Materials />} />
        <Route path="/materials/:year" element={<Materials />} />
        <Route path="/materials/:year/:subject" element={<Materials />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
