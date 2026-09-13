import { Suspense } from "react"
import Banner from "./Component/Banner"
import ExploreTechnologies from "./Component/ExploreTechnologies"
import Navber from "./Component/Navber"
import type { TechnologyType } from "./TechnologieType"
import Footer from "./Component/Footer"




const handleTechnologiesData = async (): Promise<TechnologyType[]> => {
  const res = await fetch("/technologies.json")
  const data = await res.json()
  return data
}

function App() {

 
  return (
    <div>
      <Navber/>
      <Banner/>
      <Suspense fallback={<h3>Loading.....</h3>}>
        <ExploreTechnologies handleTechnologiesData={handleTechnologiesData()}/>
      </Suspense>
      <Footer/>
    </div>
  )
}

export default App
