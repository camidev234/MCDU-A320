import { InferiorKeys } from "./InferiorKeys";
import PropTypes from 'prop-types';

export const AlphaKeys = ({onUpdateText, onClr}) => {
    const buttonStyle = "w-6 h-6 bg-gray-950 rounded-sm text-white flex justify-center items-center shadow-button";
  
    const handleChange = (letter) => {
        onUpdateText(letter);
    };

    return (
      <div className="alphakeys w-full h-full bg-brown-500 flex flex-col gap-2">
        <article className="flex justify-evenly">
          <button className={buttonStyle} onClick={() => handleChange("A")}><div className="bg-black rounded-full w-[80%] h-[80%] text-sm">A</div></button>
          <button className={buttonStyle} onClick={() => handleChange("B")}><div className="bg-black rounded-full w-[80%] h-[80%] text-sm">B</div></button>
          <button className={buttonStyle} onClick={() => handleChange("C")}><div className="bg-black rounded-full w-[80%] h-[80%] text-sm">C</div></button>
          <button className={buttonStyle} onClick={() => handleChange("D")}><div className="bg-black rounded-full w-[80%] h-[80%] text-sm">D</div></button>
          <button className="w-6 h-6 bg-gray-950 rounded-md text-white flex justify-center items-center border-2 border-white" onClick={() => handleChange("A")}><div className="bg-black rounded-full w-[80%] h-[80%] text-sm" onClick={() => handleChange("E")}>E</div></button>
        </article>
        <article className=" flex justify-evenly">
          <button className={buttonStyle} onClick={() => handleChange("F")}><div className="bg-black rounded-full w-[80%] h-[80%] text-sm">F</div></button>
          <button className={buttonStyle} onClick={() => handleChange("G")}><div className="bg-black rounded-full w-[80%] h-[80%] text-sm">G</div></button>
          <button className={buttonStyle} onClick={() => handleChange("H")}><div className="bg-black rounded-full w-[80%] h-[80%] text-sm">H</div></button>
          <button className={buttonStyle} onClick={() => handleChange("I")}><div className="bg-black rounded-full w-[80%] h-[80%] text-sm">I</div></button>
          <button className={buttonStyle} onClick={() => handleChange("J")}><div className="bg-black rounded-full w-[80%] h-[80%] text-sm">J</div></button>
        </article>
        <article className=" flex justify-evenly">
          <button className={buttonStyle} onClick={() => handleChange("K")}><div className="bg-black rounded-full w-[80%] h-[80%] text-sm">K</div></button>
          <button className={buttonStyle} onClick={() => handleChange("L")}><div className="bg-black rounded-full w-[80%] h-[80%] text-sm">L</div></button>
          <button className={buttonStyle} onClick={() => handleChange("M")}><div className="bg-black rounded-full w-[80%] h-[80%] text-sm">M</div></button>
          <button className="w-6 h-6 bg-gray-950 rounded-md text-white flex justify-center items-center border-2 border-white" onClick={() => handleChange("N")}><div className="bg-black rounded-full w-[80%] h-[80%] text-sm">N</div></button>
          <button className={buttonStyle} onClick={() => handleChange("O")}><div className="bg-black rounded-full w-[80%] h-[80%] text-sm">O</div></button>
        </article>
        <article className=" flex justify-evenly">
          <button className={buttonStyle} onClick={() => handleChange("P")}><div className="bg-black rounded-full w-[80%] h-[80%] text-sm">P</div></button>
          <button className={buttonStyle} onClick={() => handleChange("Q")}><div className="bg-black rounded-full w-[80%] h-[80%] text-sm">Q</div></button>
          <button className={buttonStyle} onClick={() => handleChange("R")}><div className="bg-black rounded-full w-[80%] h-[80%] text-sm">R</div></button>
          <button className="w-6 h-6 bg-gray-950 rounded-md text-white flex justify-center items-center border-2 border-white" onClick={() => handleChange("S")}><div className="bg-black rounded-full w-[80%] h-[80%] text-sm">S</div></button>
          <button className={buttonStyle} onClick={() => handleChange("T")}><div className="bg-black rounded-full w-[80%] h-[80%] text-sm">T</div></button>
        </article>
        <article className=" flex justify-evenly">
          <button className={buttonStyle} onClick={() => handleChange("U")}><div className="bg-black rounded-full w-[80%] h-[80%] text-sm">U</div></button>
          <button className={buttonStyle} onClick={() => handleChange("V")}><div className="bg-black rounded-full w-[80%] h-[80%] text-sm">V</div></button>
          <button className="w-6 h-6 bg-gray-950 rounded-md text-white flex justify-center items-center border-2 border-white" onClick={() => handleChange("W")}><div className="bg-black rounded-full w-[80%] h-[80%] text-sm">W</div></button>
          <button className={buttonStyle} onClick={() => handleChange("X")}><div className="bg-black rounded-full w-[80%] h-[80%] text-sm">X</div></button>
          <button className={buttonStyle} onClick={() => handleChange("Y")}><div className="bg-black rounded-full w-[80%] h-[80%] text-sm">Y</div></button>
        </article>
        <article className="flex gap-3 justify-center">
          <div className="AL flex gap-3">
            <button className={buttonStyle} onClick={() => handleChange("Z")}><div className="bg-black rounded-full w-[80%] h-[80%] text-sm">Z</div></button>
            <button className={buttonStyle} onClick={() => handleChange("/")}><div className="bg-black rounded-full w-[80%] h-[80%] text-sm">/</div></button>
          </div>
          <div className="">
            <InferiorKeys onUpdateText={onUpdateText} onClr={onClr}/>
          </div>
        </article>
      </div>
    );
  };

AlphaKeys.propTypes = {
    onUpdateText: PropTypes.func.isRequired,
    onClr: PropTypes.func.isRequired
}
  