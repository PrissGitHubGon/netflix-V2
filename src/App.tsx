import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/scss/App.scss";
import Layout from "./views/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" element="" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
