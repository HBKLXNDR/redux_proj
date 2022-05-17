import {Routes, Route} from "react-router-dom";

import './App.css';
import {MainLayout} from "./layouts";

function App() {
  return (
      <Routes>
        <Route path={"/"} element={<MainLayout/>}>

        </Route>
      </Routes>
  );
}

export default App;
