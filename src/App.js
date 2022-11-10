import 'react-multi-carousel/lib/styles.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepages from './Components/Homepages'
// import NavbarList from './Components/NavbarList'
import About from './About'
// import Services from './Services'
// import Contact from './Contact'
// import Clients from './Clients'
// import Project from './Project'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepages />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
