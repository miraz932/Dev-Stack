import type { Dispatch, SetStateAction } from "react";
import type { TechnologyType } from "../TechnologieType";
import { MdClose } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { Bounce, toast } from "react-toastify";

export interface SelectedProps {
  addStack: TechnologyType[]
  setAddStack: Dispatch<SetStateAction<TechnologyType[]>>
}


const Selected = ({ addStack, setAddStack }: SelectedProps) => {
  const handleRemove = (cart: TechnologyType) => {
    const remove = addStack.filter(nweStack => nweStack.name !== cart.name)
    setAddStack(remove)

    toast.info('Remove Cart')
   

  }

  const handleRemoveAll = () => {
    setAddStack([]);
    toast.info('Remove All Cart')
  };



  if (addStack.length === 0) {
    return (
      <div>
        <h5 className="font-bold">Your Stack</h5>

        <div className="flex justify-center  border border-dotted rounded-2xl border-gray-400 px-6 py-6 mt-4">
          <h5 className=" text-gray-400">Your stack is empty.</h5>
        </div>

      </div>
    )
  }


  return (
    <div>
      <h1 className="font-bold text-[18px]">Yor Stack</h1>
      <p className="text-gray-400 mb-4">({addStack.length}) Technology Selected</p>
      {
        addStack.map(cart => {
          return (

            <div className="flex justify-between items-center mt-2 border border-gray-400 py-2.5  px-2 rounded-[10px] ">
              <div className="flex items-center gap-1">
                <img className="h-8 w-fit bg-center bg-cover" src={cart.icon} alt={cart.name} />
                <div className="flex-col">
                  <h1 className="font-bold text-[13px]">{cart.name}</h1>
                  <p className="-mt-1 text-gray-400 text-[12px]">{cart.category}</p>
                </div>

              </div>

              <AiOutlineClose className=" cursor-pointer" onClick={() => handleRemove(cart)} />


            </div>

          )
        })
      }
      <div className="flex justify-center border rounded-[13px] hover:bg-[#7471732d] border-[#D82C20] py-1 mt-5">
        <button className=" font-semibold cursor-pointer text-[#D82C20] px-4" onClick={handleRemoveAll}>Remove All</button>
      </div>
    </div>
  )
}
export default Selected;