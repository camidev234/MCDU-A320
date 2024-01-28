import { DisplayPage } from "./DisplayPage"
import { TextContent } from "./TextContent"


export const Display = () => {
    return (
        <section className="display w-[100%] h-[93%] bg-zinc-950 rounded-xl">
            <section className="actualPage w-full h-[90%]">
                <DisplayPage/>
            </section>
            <section className="content w-full h-[10%]">
                <TextContent/>
            </section>
        </section>
    )
}