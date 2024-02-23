import './divinationButton.scss';

function DivinationButton({ onClick }) {
    return (
        <button className="divination-button" onClick={onClick}>Vyvěštit budoucnost</button>
    )
}

export default DivinationButton;