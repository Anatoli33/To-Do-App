import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Contact from "./Contact";
import Todo from "./Hero.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Todo/>} />
        <Route path="/about" element={<h2>About us</h2>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
