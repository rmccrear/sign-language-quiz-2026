
function LangaugeCard({item}) {
    return (
        <article>
            <h1>{item.Language}</h1>
            <p>{item["Speakers in millions"]} million speakers.</p>
            <p>Rank in world languages: {item["Rank"]}</p>
        </article>
    )
}

export default LangaugeCard
