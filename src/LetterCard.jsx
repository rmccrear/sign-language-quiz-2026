

function LetterCard({letterText, letterImage}) {

    return (
        <article>
            <h1>{letterText}</h1>
            <img src={letterImage} className="letter-image"/>
        </article>
    )
}

export default LetterCard