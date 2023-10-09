import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Insert from "./pages/Insert";
import App from "./App";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<Insert />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
