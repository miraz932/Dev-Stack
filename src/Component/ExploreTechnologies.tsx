import { use, useState } from "react"
import type { TechnologyType } from "../TechnologieType"
import TechnologieCart from "./TechnologieCart"

export interface ExploreTechnologiesProps {
  handleTechnologiesData: Promise<TechnologyType[]>
}

export default function ExploreTechnologies({ handleTechnologiesData }: ExploreTechnologiesProps) {
  const useData = use(handleTechnologiesData)
  console.log(useData)
  const [addStack, setAddStack] = useState<TechnologyType[]>([])
  return (
    <div className="container mx-auto xl:w-270  mt-4">

      <div className="grid justify-center text-center md:text-left md:justify-start">
        <h1 className="font-bold text-3xl">Explore the <span className="font-bold bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span> </h1>
        <p className="text-[#475569]">Pick one technology per category to build your ideal stack.</p>
      </div>
      <TechnologieCart technologieData={useData} addStack={addStack} setAddStack={setAddStack}></TechnologieCart>
    </div>
  )
}