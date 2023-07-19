import { useEffect, useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import { SelectedPage } from "./types"


const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.screenY === 0) {
        setIsTopPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <div className="app">
        <Navbar  
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage} 
        />
      </div>
    </>
  )
}

export default App
