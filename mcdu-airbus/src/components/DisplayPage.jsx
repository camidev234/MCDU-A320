import { useContext } from "react"
import { BaseContext } from "../context/BaseContext"
import { DataIndex } from "./DataIndex";
import { AcStatus } from "./AcStatus";


export const DisplayPage = () => {
    const { actualPage } = useContext(BaseContext);

    const renderContent = () => {
        switch (actualPage) {
            case 1:
                console.log(1);
                return <DataIndex/>
            default:
                return <AcStatus/>
        }
    }

    return (
        <div>
            {renderContent()}
        </div>
    )
}