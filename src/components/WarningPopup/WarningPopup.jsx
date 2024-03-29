import './warningPopup.scss'

function WarningPopup({ onClose, text }) {
    return (
        <div className='warning-popup-wrapper'>
            <div className='warning-popup'>
                <div>{text}</div>
            </div>
            <div className='close' onClick={onClose}>×</div>
        </div>
    );
}

export default WarningPopup;