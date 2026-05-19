import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import './Layout.scss' // SCSS faylini shu yerda import qilamiz

const Layout = () => {
  return (
    <div className="wrapper">
         <Header/>
         <main className="main-content">
            <Outlet/> {/* Sahifalar kodi avtomatik ravishda shu yerga tushadi */}
         </main>
         <Footer/>
    </div>
  )
}

export default Layout