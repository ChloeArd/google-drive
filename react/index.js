import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {MyDrive} from "./pages/MyDrive/MyDrive";
import {Header} from "./components/Header/Header";
import {RouteNotFound} from "./components/RouteNotFound/RouteNotFound";


ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<MyDrive />} />
      <Route path="*" element={<RouteNotFound />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
