import './App.css'
import Hero from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'
import Stats from './components/Stats/Stats'
import ToolsHeading from './components/ToolsHeading/ToolsHeading'
import ToolsCards from './components/ToolsCards/ToolsCards'
import { Suspense, useState } from 'react'
import Cart from './components/Cart/Cart'
import GetStarted from './components/GetStarted/GetStarted'

// const fetchToolsData = fetch("toolsData.json").then(res => res.json())

const fetchToolsData = async () => {
  const res = await fetch("toolsData.json");
  const data = await res.json();
  return data;
}



function App() {
  const [activeTab, setActiveTab] = useState("products");

  const [cart, setCart] = useState([]);

  const cartLength = cart.length;

  let toolsDataPromise;

  toolsDataPromise = fetchToolsData();

  return (
    <>
      <NavBar cartLength={cartLength} />

      <Hero />

      <Stats />

      <ToolsHeading activeTab={activeTab} setActiveTab={setActiveTab} cartLength={cartLength} />

      {activeTab === "products" && (
        <Suspense fallback={<div>Loading...</div>}>
          <ToolsCards toolsDataPromise={toolsDataPromise} cart={cart} setCart={setCart} />
        </Suspense>
      )}

      {activeTab === "cart" && (
        <Cart cart={cart} setCart={setCart} />
      )}

      <GetStarted />
    </>
  )
}

export default App
