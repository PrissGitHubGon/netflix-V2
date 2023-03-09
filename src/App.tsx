import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      {/* Ternaire qui permet de ne pas afficher le header et le footer sur la page d'accueil */}
      {/* {window.location.pathname !== "/" ? <Header /> : null} */}
      <Header />

      <Routes>
        <Route path="/" element="" />
      </Routes>
      {/* {window.location.pathname !== "/" ? <Footer /> : null} */}
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
