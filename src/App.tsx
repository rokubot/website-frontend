import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage'
import BetaTestingPage from './pages/BetaTestingPage'
import CommandsPage from './pages/CommandsPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/beta" element={<BetaTestingPage />} />
        <Route path="/commands" element={<CommandsPage />} />
      </Routes>
    </Router>
  )
}

export default App
