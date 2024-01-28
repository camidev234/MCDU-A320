import { BiSolidRightArrowAlt, BiSolidLeftArrowAlt, BiSolidDownArrowAlt, BiSolidUpArrowAlt } from "react-icons/bi";

export const SlewKeys = () => {
    return (
        <div className="slew w-full flex flex-col gap-2">
            <article className="flex gap-3">
                <button className="bg-black text-white text-[10px] w-9 h-6 rounded-sm shadow-button flex justify-center items-center"><BiSolidLeftArrowAlt  className="text-lg"/></button>
                <button className="bg-black text-white text-[10px] w-9 h-6 rounded-sm shadow-button flex justify-center items-center"><BiSolidUpArrowAlt className="text-lg"/></button>
            </article>
            <article className="gap-3 flex">
                <button className="bg-black text-white text-[10px] w-9 h-6 rounded-sm shadow-button flex justify-center items-center"><BiSolidRightArrowAlt className="text-lg"/></button>
                <button className="bg-black text-white text-[10px] w-9 h-6 rounded-sm shadow-button flex justify-center items-center"><BiSolidDownArrowAlt className="text-lg"/></button>
            </article>
        </div>
    )
}