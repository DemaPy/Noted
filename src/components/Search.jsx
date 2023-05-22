import { AiOutlineSearch } from "react-icons/ai";
import { Input } from 'antd';

export const Search = ({ handleSearch }) => {
  return (
    <div>
      <Input className="text-[#eee]" onChange={handleSearch} placeholder="Search" prefix={<AiOutlineSearch style={{ width: "24px", height: "24px", color: "#eee" }} />} />
    </div>
  )
}