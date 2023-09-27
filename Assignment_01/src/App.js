import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import Search from "./pages/search/Search";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import DefaultLayout from "./components/layout/DefaultLayout";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Transactions from "./pages/transaction/Transactions";

library.add(faCheckSquare, faCoffee);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index="true" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="detail/:hotelId" element={<Detail />} />
          <Route path="trans" element={<Transactions />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
