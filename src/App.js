import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./pages/Main"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
