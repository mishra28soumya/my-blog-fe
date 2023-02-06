import logo from './logo.svg';
import Home from "./pages/Home"
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="max-w-screen-md mx-auto pt-20">
    <Routes>
          <Route path="/" element={<Home />} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
