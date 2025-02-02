import { useState } from 'react'
import rokuLogo from './assets/logo.png'
import discordLogo from './assets/discord-logo-white.svg'
import './App.css'


function Navbar() {
  return (
    <nav>
      <img src={rokuLogo} className="navlogo" alt="React logo" />
      <button className="navbutton"><a href="/">Home</a></button>
      <button className="navbutton"><a href="/about">About</a></button>
      <button className="navbutton"><a href="/contact">Contact</a></button>
      <button className="loginbutton">
      <img className="discordlogo" src={discordLogo} alt="discord logo"/>
      <a className="loginbutton" href="/login">Login with discord</a>
      </button>
    </nav>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
      <h1>Comming Soon....</h1>
      
    </>
  )
}

export default App
