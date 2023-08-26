import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Users from './components/Users'
import Create from './components/Create'
import Update from './components/Update'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Users />} />
          <Route path='/create' element= {<Create />} />
          <Route path='/update' element= {<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
