import './displaywidget.scss';
const DisplayWidget = ({ icon, title, content}) => {
    return (
        <div className="display-widget">
            {icon}
            <span className="display-widget-title">{title}</span>
            <span className="display-widget-content">{content}</span>
        </div>
    )
}

export default DisplayWidget
