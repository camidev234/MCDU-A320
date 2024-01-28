import { BsPlusCircleFill } from "react-icons/bs";
import { TopAnnunciators } from "./TopAnnunciators";
import { BsCircleFill } from "react-icons/bs";
import { LeftButtons } from "./LeftButtons";
import { RightButtons } from "./RightButtons";
import { Display } from "./Display";
import { PageKeys } from "./PageKeys";
import { AirportKey } from "./AirportKey";
import { SlewKeys } from "./SlewKeys";
import { NumbersKeys } from "./NumbersKeys";
import { AlphaKeys } from "./AlphaKeys";

export const Mcdu = () => {
  return (
    <div className="bg-gray-600 w-[390px] h-[580px] rounded-md shadow-md">
      <div className="top flex w-full h-7">
        <div className="w-[20%] flex h-[100%]">
          <div className="w-[55%] flex p-1">
            <BsPlusCircleFill className="text-sm" />
          </div>
          <div className="w-[42%] mt-2">
            <BsCircleFill className="text-2xl text-gray-300" />
          </div>
        </div>
        <div className="w-[60%]">
          <TopAnnunciators />
        </div>
        <div className="flex w-[20%] h-[100%]">
          <div className="w-[42%] mt-2 flex justify-end">
            <BsCircleFill className="text-2xl text-gray-300" />
          </div>
          <div className="w-[55%] flex justify-end p-1">
            <BsPlusCircleFill className="text-sm" />
          </div>
        </div>
      </div>
      <div className="medium w-[100%] h-[42%] mt-5 flex">
        <div className="lefbtn w-[17%] h-[100%]">
          <LeftButtons />
        </div>
        <div className="displayscreen w-[66%] flex justify-center items-center">
          <Display />
        </div>
        <div className="rightbtn  w-[17%] h-[100%]">
          <RightButtons />
        </div>
      </div>
      <div className="inferior w-full h-[48%] flex">
        <div className="w-[7%] h-full flex justify-end items-center">
          <div className="w-[50%] h-24 bg-black rounded-xl"></div>
        </div>
        <div className="w-[86%] h-full flex flex-col gap-2">
          <section className="w-full flex justify-center items-center mt-1 h-14">
            <PageKeys/>
          </section>
          <div className="intferiorkeys w-full h-[204px] flex justify-center items-center">
            <div className="cont w-[93%] h-full flex">
            <section className="left w-[37%] h-full flex flex-col gap-2 ">
              <article className="arp w-full h-6 flex justify-center">
                <AirportKey/>
              </article>
              <article className="slew ">
                <SlewKeys/> 
              </article>
              <article className="numbers w-full h-[108px]">
                <NumbersKeys/>
              </article>
            </section>
            <section className="right h-full w-[61%]">
              <article className="space w-full h-[7%]"></article>
              <article className="alpha w-full h-[93%]">
                <AlphaKeys/>
              </article>
            </section>
            </div>
          </div>
        </div>
        <div className="w-[7%] h-full flex justify-start items-center">
          <div className="w-[50%] h-24 bg-black rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};
