import { AiOutlinePlusCircle } from "react-icons/ai";
import { Circle } from "./";



export const AddNote = () => {

  return (
    <div className="flex flex-col items-center">
        <div className="md:mb-20 mb-12">
            <AiOutlinePlusCircle className="w-10 h-10 cursor-pointer" />
        </div>
        <div className="flex flex-col gap-8">
            <Circle color="#F18D31"/>
            <Circle color="#C17E7E" />
            <Circle color="#B02B2B" />
            <Circle color="#7EC1A1" />
        </div>
    </div>
  )
}
