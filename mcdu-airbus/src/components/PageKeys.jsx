import '../assets/css/btns.css';

export const PageKeys = () => {
  return (
    <div className="btns w-[93%] flex flex-col gap-2">
      <article className="firstRow 0 w-full flex items-center gap-3 justify-center">
        <button className="bg-black text-white text-[10px] h-6 w-9 rounded-sm shadow-button">DIR</button>
        <button className="bg-black text-white text-[10px] h-6 w-9 rounded-sm shadow-button">PROG</button>
        <button className="bg-black text-white text-[10px] h-6 w-9 rounded-sm shadow-button">PERF</button>
        <button className="bg-black text-white text-[10px] h-6 w-9 rounded-sm shadow-button">INT</button>
        <button className="bg-black text-white text-[10px] h-6 w-9 rounded-sm shadow-button">DATA</button>
        <button className="bg-black text-white text-[10px] w-8 h-6 rounded-sm shadow-button"></button>
        <button className="bg-black text-white text-[10px] w-6 h-6 rounded-sm shadow-button"><div className="w-[80%] h-2 bg-gray-600 m-auto rounded-sm"></div><span>BRT</span></button>
      </article>
      <article className="firstRow 0 w-full flex items-center gap-3 justify-center">
        <button className="bg-black text-white text-[10px] h-6 w-9 rounded-sm shadow-button" style={{ lineHeight: '1' }}>F-PLN</button>
        <button className="bg-black text-white text-[9px] h-6 w-9 rounded-sm shadow-button" style={{ lineHeight: '1' }}>RAD NAV</button>
        <button className="bg-black text-white text-[9px] h-6 w-9 rounded-sm shadow-button" style={{ lineHeight: '1' }}>FUEL PRED</button>
        <button className="bg-black text-white text-[9px] h-6 w-9 rounded-sm shadow-button" style={{ lineHeight: '1' }}>SEC F-PLN</button>
        <button className="bg-black text-white text-[9px] h-6 w-9 rounded-sm shadow-button" style={{ lineHeight: '1' }}>ATC COMM</button>
        <button className="bg-black text-white text-[9px] w-8 h-6 rounded-sm shadow-button" style={{ lineHeight: '1' }}>MCDU MENU</button>
        <button className="bg-black text-white text-[10px] w-6 h-6 rounded-sm shadow-button"><div className="w-[80%] h-2 bg-gray-300 m-auto rounded-sm"></div><span>DIM</span></button>
        </article>
    </div>
  );
};

