import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Tasklist } from './pages/Tasklist'
import { Taskform } from './pages/Taskform'
import { Singletask } from './pages/Singletask'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/taskform" element={<Taskform />} />
        <Route path="/tasks" element={<Tasklist />} />
        <Route path="/tasks/:id" element={<Singletask />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
