import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Forms from './pages/Forms'
import FormsStep2 from './pages/FormsStep2'
import FormsStep3 from './pages/FormsStep3'
import FinishPage from './pages/FinishPage'
import DynamicForm from './pages/DynamicForm'
import Dashboard from './pages/admin/Dashboard'
import FormsList from './pages/admin/FormsList'
import FormEditor from './pages/admin/FormEditor'
import FormSubmissions from './pages/admin/FormSubmissions'
import AllSubmissions from './pages/admin/AllSubmissions'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/forms/step2" element={<FormsStep2 />} />
        <Route path="/forms/step3" element={<FormsStep3 />} />
        <Route path="/forms/finishpage" element={<FinishPage />} />
        <Route path="/form/*" element={<DynamicForm />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/forms" element={<FormsList />} />
        <Route path="/admin/forms/new" element={<FormEditor />} />
        <Route path="/admin/forms/edit/*" element={<FormEditor />} />
        <Route path="/admin/forms/*/submissions" element={<FormSubmissions />} />
        <Route path="/admin/submissions" element={<AllSubmissions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App