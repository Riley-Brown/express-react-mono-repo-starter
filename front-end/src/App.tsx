import { Routes, Route } from 'react-router-dom'
import './App.css'

import HelloWorld from 'Pages/HelloWorld'
import AnotherRoute from 'Pages/AnotherRoute'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HelloWorld />} />
        <Route path="/another-route" element={<AnotherRoute />} />
      </Routes>
    </div>
  )
}

export default App
