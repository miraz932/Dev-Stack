
import { type Dispatch, type SetStateAction } from "react"
import type { TechnologyType } from "../TechnologieType"
import Cart from "./cart"
import Selected from "./Selected"

export interface TechnologieCartProps {
  technologieData: TechnologyType[]
  addStack: TechnologyType[]
  setAddStack: Dispatch<SetStateAction<TechnologyType[]>>

}


export default function TechnologieCart({ technologieData, addStack, setAddStack }: TechnologieCartProps) {


  return (
    <div className=" flex flex-col w-85 container mx-auto md:w-fit md:flex-row gap-1 justify-center md:justify-start">
      <div className=" container grid grid-cols-1 md:grid-cols-3 gap-4 mb-5 items-center mt-6" >

        {
          technologieData.map((technologie, ind) => {
            return (
              <Cart technologie={technologie} key={ind} addStack={addStack} setAddStack={setAddStack}></Cart>
            )
          })
        }
      </div>

    
      <div className="border mt-6 h-fit  rounded-2xl border-gray-300 p-5 w-85 container mx-auto  md:w-72">
        <Selected addStack={addStack} setAddStack={setAddStack}></Selected>
      </div>
    </div>


  )
}


