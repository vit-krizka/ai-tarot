import Header from './../Header/Header';

import './cards.scss';

function Cards() {
    return (
        <>
            <Header />
            <main className="main-wrapper">
                <div className="main">
                    <h1>Karty</h1>
                    <p>Na této stránce nalezneš seznam všech karet.</p>
                    <div className="cards">

                    </div>
                </div>
            </main>
        </>
    )
}

export default Cards;