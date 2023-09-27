import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import HomeSignUp from "./components/HomeSignUp";
import HomeApplication from "./components/HomeApplication";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<HomeSignUp />} />
      <Route path="/application" element={<HomeApplication />} />
    </Routes>
  );
}

export default App;
