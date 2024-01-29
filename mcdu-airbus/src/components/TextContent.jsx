import PropTypes from 'prop-types';

export const TextContent = ({textContent}) => {

    return (
        <section className="text w-full h-full" style={{fontFamily: 'monospace', letterSpacing: '1px'}}>
            <div className="content w-full h-full pl-2">
                <span className="text-[16px] text-white">{textContent}</span>
            </div>
        </section>
    )
}

TextContent.propTypes = {
    textContent: PropTypes.string.isRequired
}