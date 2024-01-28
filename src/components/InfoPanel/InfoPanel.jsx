import './infoPanel.scss';

function InfoPanel({ children }) {
    return (
        <div className="info-panel">
            {children}
        </div>
    );
}

export default InfoPanel;