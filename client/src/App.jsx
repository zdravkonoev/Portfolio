import { Routes, Route } from 'react-router'
import NotFound404 from './components/not-found-404/NotFound404.jsx'
import Home from './components/home/Home.jsx'

function App() {

  return (
    <>   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </>
  )
}

export default App
