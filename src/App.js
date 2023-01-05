import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/contact" element={<ContactPage />}></Route>
    </Routes>
  );
}

export default App;
