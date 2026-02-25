import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Materials from "./pages/Materials.jsx";
import Login from "./pages/Login.jsx";
import Admin from "./pages/Admin.jsx";
import ProtectedRoute from "./pages/ProtectedRoute.jsx";
import Navbar from "./components/Navbar.jsx";
import Interview from "./pages/Interview.jsx";
import Roadmaps from "./pages/Roadmaps.jsx";
import About from "./pages/About.jsx";
import Register from "./pages/Register.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

        {/*URL PARAMS */}
        <Route path="/materials" element={<Materials />} />
        <Route path="/materials/:year" element={<Materials />} />
        <Route path="/materials/:year/:subject" element={<Materials />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/roadmaps" element={<Roadmaps />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
