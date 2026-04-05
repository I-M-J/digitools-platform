import './App.css'
import Hero from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'
import Stats from './components/Stats/Stats'
import ToolsHeading from './components/ToolsHeading/ToolsHeading'
import ToolsCards from './components/ToolsCards/ToolsCards'
import { Suspense, useState } from 'react'

// const fetchToolsData = fetch("toolsData.json").then(res => res.json())

const fetchToolsData = async () => {
  const res = await fetch("toolsData.json");
  const data = await res.json();
  return data;
}



function App() {
  const [activeTab, setActiveTab] = useState("products");

  let toolsDataPromise;

  toolsDataPromise = fetchToolsData();

  return (
    <>
      <NavBar />

      <Hero />

      <Stats />

      <ToolsHeading activeTab={activeTab} setActiveTab={setActiveTab} />

      <Suspense fallback={<div>Loading...</div>}>
        <ToolsCards toolsDataPromise={toolsDataPromise} />
      </Suspense>
    </>
  )
}

export default App
