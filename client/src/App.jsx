import "./App.css";
import { Routes, Route } from "react-router";
import { Header } from "./components/Header.jsx";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { NotFound } from "./pages/NotFound.jsx";
import { IndividualDestination } from "./pages/IndividualDestination.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destination/:id" element={<IndividualDestination />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
