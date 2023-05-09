import React from 'react'
import Home from './Home'
import Cakes from './Cakes'
import About from './About'
import Footer from './Footer'

const App = () => {
  return (
    <>
      <div className="container">
        <header className="header">
          <h1>BaeCakes</h1>
        </header>
        <div>
          <ul>
            <li className="link">Home</li>
            <li className="link">Cakes</li>
            <li className="link">About</li>
          </ul>
        </div>
      </div>
      <Home />
      <Cakes />
      <About />
      <Footer />
    </>
  )
}
export default App
