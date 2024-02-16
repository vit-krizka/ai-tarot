import Header from './../Header/Header';

import './blog.scss';

function Blog() {
    return (
        <>
            <Header />
            <main className="blog-wrapper">
                <div className="blog">
                    <h1>Články</h1>
                    <p>Na této stránce nalezneš články o věštění.</p>
                    <div className="blog">

                    </div>
                </div>
            </main>
        </>
    )
}

export default Blog;