import './warningPopup.scss'

function WarningPopup({ onClose }) {
    return (
        <div className='warning-popup-wrapper'>
            <div className='warning-popup'>
                <div>Musíte vybrat tři karty</div>
            </div>
            <div className='close' onClick={onClose}>X</div>
        </div>
    );
}

export default WarningPopup;