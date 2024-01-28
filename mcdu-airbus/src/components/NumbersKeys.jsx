export const NumbersKeys = () => {
  return (
    <div className="numbers w-full h-full flex flex-col gap-1">
      <article className="flex justify-around">
        <button className="bg-black w-6 h-6 rounded-full text-white text-sm shadow-button">1</button>
        <button className="bg-black w-6 h-6 rounded-full text-white text-sm shadow-button">2</button>
        <button className="bg-black w-6 h-6 rounded-full text-white text-sm shadow-button">3</button>
      </article>
      <article className="flex justify-around">
        <button className="bg-black w-6 h-6 rounded-full text-white text-sm shadow-button">4</button>
        <button className="bg-black w-6 h-6 rounded-full text-white text-sm shadow-button">5</button>
        <button className="bg-black w-6 h-6 rounded-full text-white text-sm shadow-button">6</button>
      </article>
      <article className="flex justify-around">
        <button className="bg-black w-6 h-6 rounded-full text-white text-sm shadow-button">7</button>
        <button className="bg-black w-6 h-6 rounded-full text-white text-sm shadow-button">8</button>
        <button className="bg-black w-6 h-6 rounded-full text-white text-sm shadow-button">9</button>
      </article>
      <article className="flex justify-around">
        <button className="bg-black w-6 h-6 rounded-full text-white text-sm shadow-button flex justify-center items-center">.</button>
        <button className="bg-black w-6 h-6 rounded-full text-white text-sm shadow-button">0</button>
        <button className="bg-black w-6 h-6 rounded-full text-white text-sm shadow-button">+/-</button>
      </article>
    </div>
  );
};
