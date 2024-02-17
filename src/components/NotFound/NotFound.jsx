import Header from './../Header/Header';

import './notFound.scss';

function NotFound() {
    return (
        <>
            <Header />
            <main className="not-found-wrapper">
                <div className="not-found">
                    <h1>Stránka nenalezena</h1>
                </div>
            </main>
        </>
    )
}

export default NotFound;