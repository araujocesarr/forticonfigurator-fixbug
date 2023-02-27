import './style/styles.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Fortigate from './pages/Fortigate';
import NoPage from "./pages/NoPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="fortigate" element={<Fortigate />} />
        <Route path='*' element={<NoPage />} />
    </Routes>
  );
}

export default App;
