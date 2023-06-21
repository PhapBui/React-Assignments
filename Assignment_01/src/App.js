import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import Search from "./pages/search/Search";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

library.add(faCheckSquare, faCoffee);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/search"
          element={<Search />}
        />
        <Route
          path="/detail"
          element={<Detail />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
