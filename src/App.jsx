import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import BoliviaEnLaCumbre from "./Pages/BoliviaEnLaCumbre";
import DialogosConsultas from "./Pages/DialogosConsultas";
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
          <Route path='dialogos-y-consultas' element={<DialogosConsultas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
