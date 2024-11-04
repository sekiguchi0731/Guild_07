import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Top from './pages/top/Top';
import Results from './pages/results/Results';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Top />} />
          <Route path='/results' element={<Results />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
