import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import BoliviaEnLaCumbre from "./Pages/BoliviaEnLaCumbre";
import Home from "./Pages/Home";
import SobreLaCumbre from "./Pages/SobreLaCumbre";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='sobre-la-cumbre' element={<SobreLaCumbre />} />
          <Route path='bolivia-en-la-cumbre' element={<BoliviaEnLaCumbre />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
