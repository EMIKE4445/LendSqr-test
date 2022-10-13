import './simpleDisplay.scss';

const SimpleDisplay = ({title, value}) => {
    return (
        <div className="simple-display">
            <span className="simple-display-title">{title}</span>
            <span className="simple-display-value">{value}</span>
        </div>
    )
}

export default SimpleDisplay
