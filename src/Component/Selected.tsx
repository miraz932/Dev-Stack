import type { Dispatch, SetStateAction } from "react";
import type { TechnologyType } from "../TechnologieType";
import { MdClose } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

export interface SelectedProps {
  addStack: TechnologyType[]
  setAddStack: Dispatch<SetStateAction<TechnologyType[]>>
}


const Selected = ({ addStack, setAddStack }: SelectedProps) => {
  const handleRemove = (cart:TechnologyType) =>{
    const remove = addStack.filter(nweStack=>nweStack.name!==cart.name)
    setAddStack(remove)

    
  }
  
 const handleRemoveAll = () => {
  setAddStack([]);
};



  if (addStack.length === 0) {
    return (
      <h5>No selected</h5>
    )
  }


  return (
    <div>
      <h1>Yor Stack</h1>
      <p>{addStack.length} Technology Selected</p>
      {
        addStack.map(cart => {
          return (


            <div className="flex justify-between gap-3.5 items-center mt-2 border p-2">
              <div className="flex">
                <img className="h-9 w-fit bg-center bg-cover" src={cart.icon} alt={cart.name} />
                <div className="flex-col">
                  <h1>{cart.name}</h1>
                  <p className="-mt-1">{cart.category}</p>
                </div>

              </div>

              <AiOutlineClose  className=" cursor-pointer" onClick={()=>handleRemove(cart)}/>


            </div>

          )
        })
      }
      <div className="flex justify-center mt-2">
        <button className=" border rounded-2xl cursor-pointer px-4" onClick={handleRemoveAll}>Remove All</button>
      </div>
    </div>
  )
}

export default Selected;