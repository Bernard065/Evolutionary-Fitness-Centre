import { useState } from "react"
import Navbar from "./components/Navbar/Navbar"


const App = () => {
  const [selectedPage, setSelectedPage] = useState("home")

  return (
    <>
      <div className="app">
        <Navbar  
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage} 
        />
      </div>
    </>
  )
}

export default App
