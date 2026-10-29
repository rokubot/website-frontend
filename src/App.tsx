import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage'
import BetaTestingPage from './pages/BetaTestingPage'
import CommandsPage from './pages/CommandsPage'
import PolicyPage from './pages/PolicyPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/beta" element={<BetaTestingPage />} />
        <Route path="/commands" element={<CommandsPage />} />
        <Route path="/policy" element={<PolicyPage />} />
        <Route path='/privacy' element={<PolicyPage />} />
      </Routes>
    </Router>
  )
}

export default App
