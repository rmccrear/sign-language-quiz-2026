import useFetchData from "./useFetchData";
import {useState} from "react"

import "@picocss/pico/css/pico.css"
import "./App.css"

import LetterCard from "./LetterCard"

function App() {

  const [languageBranch, setLanguageBranch] = useState("Romance")

  const { records, loading, error } = useFetchData("https://roberts-data-api.robert-mccreary-713.workers.dev/api/v1/datasets/most-spoken-languages-worldwide/records?limit=100")
  // const { records, loading, error } = useFetchData("https://roberts-data-api.robert-mccreary-713.workers.dev/api/v1/datasets/american-sign-language-alphabet/records?limit=26")

  if (loading) {
    return <h1>Loading...</h1>
  }
  console.log(records)

  // use the `find` method
  // function findSpanishLang ( item ) {
  //   return item.Language === "Spanish"
  // } 
  const findSpanishLang = (item) => {
    return item.Language === "Spanish"
  }

  const language = records.find( function ( item ) { return item.Language === "Spanish" } )
  const lang2 = records.find( (item) => item.Language === "Italian" )
  const lang3 = records.find( (item) => item["Speakers in millions"] === "379.0" ) 
  
  const lang4 = records.find( (item) => item["Language"] === "Hindi (Sanskritised Hindustani)[9]")

  // filter
  function filterRomanceLangauge(item) {
    return item.Branch === "Romance"
  }
  const romanceLanguages = records.filter(  (item) => item.Branch === "Romance"  )
  console.log("Romance Languages", romanceLanguages)

  const romanceLang1 = romanceLanguages[0]
  const romanceLang2 = romanceLanguages[1]
  const romanceLang3 = romanceLanguages[2]
  
  return (
    <>
      <div className="container flex">
        <h1>Languages of the world</h1>
        <div>
          <article>
            <h1>{ language.Language  }</h1>
            <p>
              { language["Speakers in millions"] } million speakers. Language branch is { language["Branch"] }
            </p>
          </article>
          <article>
            <h1>{ lang2.Language  }</h1>
            <p>
              { lang2["Speakers in millions"] } million speakers. Language branch is { lang2["Branch"] }
            </p>
          </article>

          <article>
            <h1>{lang3.Language}</h1>
            {lang3["Speakers in millions"]} millilon speakers. Langauge branch is {  lang3.Branch}
          </article>

          <article>
            <h2>{lang4.Language} </h2>
            {lang4["Language"]} Hindi. Language branch is { lang4.Branch}
          </article>
        </div>
        <div>
          <h1>Romance Languages</h1>
          <div className="grid">
            <article>
              <h1> {romanceLang1.Language}</h1>
            </article>
            <article>
              <h1> {romanceLang2.Language}</h1>
            </article>
            <article>
              <h1> {romanceLang3.Language}</h1>
            </article>
            <article>
              <h1> {romanceLanguages[3].Language}</h1>
            </article>
            <article>
              <h1> {romanceLanguages[4].Language}</h1>
            </article>
          </div>
        </div>



      </div>

    </>
  )
}

export default App;
