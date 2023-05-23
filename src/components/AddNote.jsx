import { AiOutlinePlusCircle } from "react-icons/ai";
import { useAppContext } from "../state/context";


export const AddNote = () => {

  const colors = [
    "#f18d31",
    "#C17E7E",
    "#B02B2B",
    "#7EC1A1"
  ]

  const context = useAppContext()

  const handleClick = (ev) => {
    context.setColor(ev.target.attributes.color.value)
    context.toggleModal()
  }
  

  return (
    <div className="flex flex-col items-center">
        <div className="md:mb-20 mb-12">
            <AiOutlinePlusCircle className="w-10 h-10 cursor-pointer" />
        </div>
        <div className="flex flex-col gap-8">
          {
            colors.map((item, index) => <div onClick={handleClick} key={index} color={item} className={`bg-[${item}] h-5 w-5 rounded-full cursor-pointer`}></div>)
          }
        </div>
    </div>
  )
}
