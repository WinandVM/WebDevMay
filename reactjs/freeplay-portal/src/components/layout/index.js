import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import Footer from './footer'
import Header from './header'

function Layout({ children }) {
    return (
        <BrowserRouter>
            <Header />
            {children}
            <Footer />
            
        </BrowserRouter>
    )
}

export default Layout