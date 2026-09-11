import { MdOutlineStar } from "react-icons/md"
import type { TechnologyType } from "../TechnologieType"

export interface TechnologieCartProps {
  technologieData: TechnologyType[]
}

export default function TechnologieCart({ technologieData }: TechnologieCartProps) {

  return (
    <div className=" container grid grid-cols-3 gap-4.5 mb-5 items-center mt-6" >

      {
        technologieData.map((technologie, ind) => {
          return (
            <div className="border rounded-2xl border-gray-300 p-5 h-82 grid gap-5">

              <div className="flex justify-between items-center">
                <img className="h-9 w-fit bg-center bg-cover object-fit" src={technologie.icon} alt={technologie.name} />
                <h2 className="bg-blue-200 border border-gray-400 text-[11px] rounded-[10px] px-1.5 py-0.5">{technologie.badge}</h2>
              </div>

              <h1 className="font-bold text-[18px] mt-1">{technologie.name}</h1>
              <p className="text-[#64748B] text-[15px]">{technologie.description}</p>



              <div className="flex justify-between items-center">
                <h3 className="bg-gray-200 rounded-[7px] px-2  text-[#475569]">{technologie.category}</h3>
                <p className="text-[#64748B]">{technologie.difficulty}</p>
                <h3 className="flex items-center font-medium text-[15px]"><MdOutlineStar className="text-amber-300" /> {technologie.rating}</h3>
              </div>

              <button className=" relative top-2 py-2 px-9 text-white cursor-pointer bg-[#0A0F1D] rounded-[14px]">Add to Stack</button>


            </div>

          )

        })
      }

    </div>


  )
}