import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import MultipleChoice from "./components/MultipleChoice";
import TrueFalse from "./components/TrueFalse";
import Header from "./components/Header";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="multiple" element={<MultipleChoice />} />
        <Route path="truefalse" element={<TrueFalse />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
