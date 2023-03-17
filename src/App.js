import './style/styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Fortigate from './pages/Fortigate';
import NoPage from "./pages/NoPage"
import { useThemeContext } from './components/context/ThemeContext';

function App() {

  const { theme } = useThemeContext()
  return (
    <Router>
      <div className='app' id={theme}>
        <div className='appWrapper'>
          <Routes>
            <Route path="/" element={<Home />} />
              <Route path="fortigate" element={<Fortigate />} />
              <Route path='*' element={<NoPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
