import PropTypes from 'prop-types';

export const InferiorKeys = ({onClr}) => {
  const buttonStyle =
    "w-6 h-6 bg-gray-950 rounded-sm text-white flex justify-center items-center shadow-button";
    
  const clr = () => {
    onClr();
  };

  return (
    <div className="flex gap-3">
      <button className={buttonStyle} >
        <div className="bg-black rounded-full w-[80%] h-[80%] text-sm">SP</div>
      </button>
      <button className={buttonStyle}>
        <div className="bg-black rounded-full w-[80%] h-[80%] text-[7px] flex justify-center items-center">OVFY</div>
      </button>
      <button className={buttonStyle} onClick={clr}>
        <div className="bg-black rounded-full w-[80%] h-[80%] text-[10px] flex justify-center items-center">CLR</div>
      </button>
    </div>
  );
};

InferiorKeys.propTypes = {
    onClr: PropTypes.func.isRequired
}
