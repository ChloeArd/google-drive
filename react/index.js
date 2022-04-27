import "./index.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MyDrive} from "./pages/MyDrive/MyDrive";
import {RouteNotFound} from "./components/RouteNotFound/RouteNotFound";
import {Log} from "./pages/Log/Log";


ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/my-drive" element={<MyDrive/>}/>
            <Route path="/" element={<Log/>}/>
            <Route path="*" element={<RouteNotFound/>}/>
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);
