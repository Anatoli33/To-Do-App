import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Contact from "./Contact";
import Todo from "./Hero.jsx";
import About from "./About.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Todo/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
