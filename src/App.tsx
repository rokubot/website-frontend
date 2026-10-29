import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage'
import BetaTestingPage from './pages/BetaTestingPage'
import CommandsPage from './pages/CommandsPage'
import PolicyPage from './pages/PolicyPage'

function App() {
  return (
    <Router>
      <Routes>
        {/* Primary routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/beta" element={<BetaTestingPage />} />
        <Route path="/commands" element={<CommandsPage />} />
        <Route path="/privacy" element={<PolicyPage />} />

        {/* Temporary redirects to the primary routes */}
        <Route path="/policy" element={<Navigate to="/privacy" replace />} />
        <Route path="/privacy-policy" element={<Navigate to="/privacy" replace />} />
      </Routes>
    </Router>
  )
}

export default App
