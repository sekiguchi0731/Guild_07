import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Top from './pages/top/Top';
import Results from './pages/results/Results';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Top />} />
        <Route path='/results' element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;
