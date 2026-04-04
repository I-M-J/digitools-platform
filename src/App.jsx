import './App.css'
import Hero from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'
import Stats from './components/Stats/Stats'
import ToolsHeading from './components/ToolsHeading/ToolsHeading'
import { useState } from 'react'



function App() {
  const [activeTab, setActiveTab] = useState("products");

  return (
    <>
      <NavBar />

      <Hero />

      <Stats />

      <ToolsHeading activeTab={activeTab} setActiveTab={setActiveTab} />
    </>
  )
}

export default App
