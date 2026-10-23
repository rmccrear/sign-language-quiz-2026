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

  const romanceSection = romanceLanguages.map( (item) => (
    <article>
      <h1>{item.Language}</h1>
      <p>{item["Speakers in millions"]} million speakers.</p>
    </article>
  ) )

  const polynesianLanguages = records.filter(  (item) => item.Branch === "Malayo-Polynesian"  )

  const polynesianSection = polynesianLanguages.map( (item) => (
    <article>
      <h1>{item.Language}</h1>
      <p>{item["Speakers in millions"]} million speakers.</p>
    </article>
  ) )
  
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
            { romanceSection }
          </div>
        </div>
        <div>
          <h1>Polynesian Languages</h1>
          <div className="grid">
            { polynesianSection }
          </div>
        </div>



      </div>

    </>
  )
}

export default App;
