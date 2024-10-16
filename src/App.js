// As rotas (caminhos) no React
//navegar entre componentes

//importar os componentes
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";

//importar as funcionalidades do react-router-dom:
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <>
      {/* // BrowserRouter é um container pra habilitar as rotas */}
      <BrowserRouter>
        <header>
          <ul>
            <li>
              {/* <Link> é um link especial para as rotas */}
              {/* o to="/" é o caminho principal */}
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </header>
        {/* Routes é container para as rotas */}
        <Routes>
          {/* Para cada rota usamos 1 Route */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
