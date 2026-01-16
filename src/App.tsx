import { BrowserRouter, Route, Routes } from "react-router";
import LangDingPage from "./pages/LangDingPage.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LangDingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
