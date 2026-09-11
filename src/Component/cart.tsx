import { MdOutlineStar } from "react-icons/md"
import type { TechnologyType } from "../TechnologieType"
import { useState, type Dispatch, type SetStateAction } from "react"


export interface CartProps {
  technologie: TechnologyType
  addStack: TechnologyType[]
  setAddStack: Dispatch<SetStateAction<TechnologyType[]>>

}

export default function Cart({ technologie, addStack, setAddStack }: CartProps) {
  const [stack, setStack] = useState(false)
  const handleClick = () => {
    setStack(true)
    setAddStack([...addStack, technologie])
    

  }
    const isAdded = addStack.some(
    stack => stack.name === technologie.name
  );
  return (
    <div className={`${stack ? "border-[#EC4899] border" : " border border-gray-300"} rounded-2xl p-5 gap-4  grid`} >

      <div className="flex justify-between items-center">
        <img className="h-9 w-fit bg-center bg-cover " src={technologie.icon} alt={technologie.name} />
         <h1 className={`${technologie.badgeColor} ${technologie.badgeColor} px-2 border border-slate-300 rounded-4xl`}>{technologie.badge}</h1>
      </div>

      <h1 className="font-bold text-[18px] mt-1">{technologie.name}</h1>
      <p className="text-[#64748B]  text-[13px]">{technologie.description}</p>
      <div className="divider divider-end -mb-1 -mt-0.5" />

      <div className="flex justify-between items-center">
        <h3 className="bg-gray-200 rounded-[5px] text-[12px] px-1 py-0.5  text-[#475569]">{technologie.category}</h3>
        <p className="text-[#64748B] text-[12px] px-1 ">{technologie.difficulty}</p>
        <h3 className="flex items-center font-medium text-[15px]"><MdOutlineStar className="text-amber-300"/> {technologie.rating}</h3>
      </div>

      <button onClick={handleClick} disabled={isAdded === true ? true : false} className={`mt-4 cursor-pointer px-9 py-2 rounded-[14px] ${isAdded ? "text-black bg-gray-300" : "text-white  bg-[#0A0F1D]"}`}>{isAdded ? "✔️Add to Stack" : "Add to Stack"}</button>
    </div >

  )
}