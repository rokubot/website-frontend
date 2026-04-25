import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage'
import BetaTestingPage from './pages/BetaTestingPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/beta" element={<BetaTestingPage />} />
      </Routes>
    </Router>
  )
}

export default App
