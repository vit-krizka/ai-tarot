import './divinationButton.scss';

function DivinationButton({ text, onClick }) {
    return (
        <button className="divination-button" onClick={onClick}>{text}</button>
    )
}

export default DivinationButton;