import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss';
import AppNavbar from "./components/AppNavbar";
import FetchArticle from "./components/FetchArticle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <AppNavbar />
        <Routes>
          <Route path="/" element={
              <FetchArticle />
          } />
          <Route path="/article/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
