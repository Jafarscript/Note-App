import { Route, Routes } from 'react-router'
import './App.css'

import Register from './pages/Register'
import Login from './pages/Login'
import Notes from './pages/Notes'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login /> } />
      <Route path='/register' element={<Register />} />

      
      <Route path='/notes' element={
        <ProtectedRoute>
        <Notes />
        </ProtectedRoute>
        } />
    </Routes>
  )
}

export default App
