import { DisplayPage } from "./DisplayPage"
import { TextContent } from "./TextContent"
import PropTypes from 'prop-types';

export const Display = ({textContent}) => {
    return (
        <section className="display w-[100%] h-[93%] bg-zinc-950 rounded-lg">
            <section className="actualPage w-full h-[90%]">
                <DisplayPage/>
            </section>
            <section className="content w-full h-[10%]">
                <TextContent textContent={textContent}/>
            </section>
        </section>
    )
}

Display.propTypes = {
    textContent: PropTypes.string.isRequired
}