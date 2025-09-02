import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Forms from './pages/Forms'
import FormsStep2 from './pages/FormsStep2'
import FormsStep3 from './pages/FormsStep3'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/forms/step2" element={<FormsStep2 />} />
        <Route path="/forms/step3" element={<FormsStep3 />} />
      </Routes>
    </Router>
  )
}

export default App