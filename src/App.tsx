import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CryptoTable from './components/CryptoTable'
import About from './pages/About';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-6">
        <Routes>
          <Route path="/" element={<CryptoTable />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
