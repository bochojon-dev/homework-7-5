import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import SingleRoute from "./pages/singleRoute/SingleRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single/:id" element={<SingleRoute />} />
      </Routes>
    </>
  );
}

export default App;
