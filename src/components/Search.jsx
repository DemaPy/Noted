import { AiOutlineSearch } from "react-icons/ai";
import { Input } from "antd";

export const Search = ({ value, onChange }) => {
  return (
    <div>
      <Input
        className="text-[#eee]"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search"
        prefix={
          <AiOutlineSearch
            style={{ width: "24px", height: "24px", color: "#eee" }}
          />
        }
      />
    </div>
  );
};
