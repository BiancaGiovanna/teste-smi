import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import "./index.css";
import Insert from "./pages/Insert";
import TabelaDeDados from "./components/Table";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <MainPage>
                <h1>DEMANDAS DE PRODUÇÃO DE LATINHAS</h1>
                <Link className="button text-link" to="/insert">
                  ADICIONAR
                </Link>
                <TabelaDeDados />
              </MainPage>
            }
          />
          <Route path="/insert" element={<Insert />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
