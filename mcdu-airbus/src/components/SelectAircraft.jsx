import { useContext, useState } from "react"
import { BaseContext } from "../context/BaseContext"

export const SelectAircraft = () => {

    const { selectAircraft} = useContext(BaseContext);

    const [aircraftSelected, setAircraftSelected] = useState(1);

    const handleSelect = (e) => {
        setAircraftSelected(e.target.value);
    };

    const handleClick = () => {
        selectAircraft(aircraftSelected);
    };

    return (
        <div className="select bg-gray-700 w-64 flex justify-center h-20 rounded-lg items-center">
            <div className="sl flex flex-col w-[80%] justify-between h-[70%]">
                <select name="" id="" onChange={handleSelect} className="bg-transparent text-white focus:bg-black  outline-none border-none">
                    <option value="1">Airbus 320-200</option>
                    <option value="2">Airbus 320 Neo</option>
                </select>
                <button onClick={handleClick} className="bg-green-500 text-white rounded-md">Elegir Aeronave</button>
            </div>
        </div>
    )

}