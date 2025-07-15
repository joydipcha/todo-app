import { PropTypes } from 'prop-types';

export default function CounterButton({ incrementBy, decrementBy, incrementCounter, decrementCounter }) {

    return (
        <div>
            <button className="counterButton" onClick={() => {
                incrementCounter(incrementBy)
            }}> +{incrementBy} </button>

            <button className="counterButton" onClick={() => {
                decrementCounter(decrementBy)
            }}> -{decrementBy} </button>
        </div>
    )
}

// Put constraints on the Types of these Props
CounterButton.propTypes = {
    incrementBy: PropTypes.number,
    decrementBy: PropTypes.number
}

// Set Default values of these Props incase none is supplied from parent Component
CounterButton.defaultProps = {
    incrementBy: 1,
    decrementBy: 1
}