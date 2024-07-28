import { CiSearch } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
const Input = () => {
  return (
    <div className="flex flex-row justify-center my-6">
        <div className="flex flex-row w-3/4 items-center space-x-4">
        <input type="text" 
            placeholder="search by city..."
            className="text-gray-500 text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase" 
        />
        <CiSearch size={30}
        className="cursor-pointer transition ease-out hover:scale-122"/>
        <FaLocationDot size={20}
        className="cursor-pointer transition ease-out hover:scale-122" />
        </div>
        <div className="flex flex-row w-1/4 items-center justify-center">
            <button className="text-2xl font-medium transition ease-out hover:scale-125">
            &#176;C
            </button>
            <p className="text-2lx font-medium mx-1">|</p>
            <button className="text-2xl font-medium transition ease-out hover:scale-125">
            &#176;F
            </button>
        </div>
    </div>
  )
}

export default Input