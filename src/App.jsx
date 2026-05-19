import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import AboutPages from './pages/AboutPages/AboutPages'
import ContactPages from './pages/ContactPages/ContactPages'
import ServicesPages from './pages/ServicesPages/ServicesPages'
import Layout from './Companents/Layout/Layout'
Layout
const App = () => {
  return (
    <div>
     <BrowserRouter>
            <Routes element={<Layout/>}>
             <Route>
               <Route path='about' element={<AboutPages/>}/>
              <Route path='contact' element={<ContactPages/>}/>
              <Route path='services'element={<ServicesPages/>}/>
             </Route>
            </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App