import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Pages/Nav/Nav";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Nav />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
