import { AiOutlineLeft } from "react-icons/ai";

export const DataIndex = () => {
  return (
    <div className="" style={{ fontFamily: "monospace", letterSpacing: "1px" }}>
      <section className="type flex justify-center">
        <h1 className="text-lg text-white">DATA INDEX</h1>
      </section>
      <section className="eng pl-2 mb-1" style={{ lineHeight: "1" }}>
        <div className="pl-3">
          <h3 className="text-white" style={{ fontSize: "11px" }}>
            POSITION
          </h3>
        </div>
        <div>
          <h3 className="text-white flex"><AiOutlineLeft />MONITOR</h3>
        </div>
      </section>
      <section className="db pl-2 mb-1" style={{ lineHeight: "1" }}>
        <div className="pl-3">
          <h2 className="text-white" style={{ fontSize: "11px" }}>
            IRS
          </h2>
        </div>
        <div>
          <h3 className="text-white flex"><AiOutlineLeft />MONITOR</h3>
        </div>
      </section>
      <section className="db pl-2 mb-4" style={{ lineHeight: "1" }}>
        <div className="pl-3">
          <h2 className="text-white" style={{ fontSize: "11px" }}>
            GPS
          </h2>
        </div>
        <div>
          <h3 className="text-white flex"><AiOutlineLeft />MONITOR</h3>
        </div>
      </section>
      <section className="db pl-2 mb-1" style={{ lineHeight: "1" }}>
        <div>
          <h3 className="text-white flex"><AiOutlineLeft />A/C STATUS</h3>
        </div>
      </section>
      <section className="db pl-2 mb-1" style={{ lineHeight: "1" }}>
        <div className="pl-3">
          <h2 className="text-white" style={{ fontSize: "11px" }}>
            CLOSEST
          </h2>
        </div>
        <div>
          <h3 className="text-white flex"><AiOutlineLeft />AIRPORTS</h3>
        </div>
      </section>
      <section className="db pl-2 mb-1" style={{ lineHeight: "1" }}>
        <div className="pl-3">
          <h2 className="text-white" style={{ fontSize: "11px" }}>
            EQUITIME
          </h2>
        </div>
        <div>
          <h3 className="text-white flex"><AiOutlineLeft />POINT</h3>
        </div>
      </section>
    </div>
  );
};
