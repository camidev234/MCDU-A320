import { useContext } from "react"
import { BaseContext } from "../context/BaseContext"


export const AcStatus = () => {
    const { aircratType } = useContext(BaseContext);

    return aircratType == 1 ? (
        <div className="" style={{fontFamily: 'monospace',  letterSpacing: '3px'}}>
            <section className="type flex justify-center">
                <h1 className="text-lg text-white">A320-200</h1>
            </section>
            <section className="eng pl-2 mb-1" style={{lineHeight: '1'}}>
                <div className="pl-2">
                    <h3 className="text-white" style={{fontSize: '11px'}}>ENG</h3>
                </div>
                <div>
                    <h3 className="text-green-500">CFM56</h3>
                </div>
            </section>
            <section className="db pl-2 mb-1" style={{lineHeight: '1'}}>
                <div className="pl-2">
                    <h2 className="text-white" style={{fontSize: '11px'}}>ACTIVE DATA BASE</h2>
                </div>
                <div>
                    <h3 className="text-blue-400">AIRAC CYCLE 2204</h3>
                </div>
            </section>
            <section className="dbn pl-2 mb-8" style={{lineHeight: '1'}}>
                <div className="pl-2">
                    <h2 className="text-white" style={{fontSize: '11px'}}>SECOND DATA BASE</h2>
                </div>
                <div>
                    <h3 className="text-blue-400">+AIRAC CYCLE 1002</h3>
                </div>
            </section>
            <section className="dbn pl-2 mb-1" style={{lineHeight: '1'}}>
                <div className="">
                    <h2 className="text-white" style={{fontSize: '11px'}}>CNG CODE</h2>
                </div>
                <div>
                    <h3 className="text-blue-400">[ ]</h3>
                </div>
            </section>
            <section className="dbn pl-2" style={{lineHeight: '1'}}>
                <div className="">
                    <h2 className="text-white" style={{fontSize: '11px'}}>IDLE/PERF</h2>
                </div>
                <div>
                    <h3 className="text-green-500">+0.0/+0.0</h3>
                </div>
            </section>
        </div>
    ) : (
        <div>
            <section className="type">
                <h1>A320-200</h1>
            </section>
        </div>
    )
}