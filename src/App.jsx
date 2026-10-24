import useFetchData from "./useFetchData";
import {useState} from "react"

import "@picocss/pico/css/pico.css"
import "./App.css"

import LanguageCard from "./LanguageCard"

function App() {

  const [languageBranch, setLanguageBranch] = useState("Romance")

  const { records, loading, error } = useFetchData("https://roberts-data-api.robert-mccreary-713.workers.dev/api/v1/datasets/most-spoken-languages-worldwide/records?limit=100")
  // const { records, loading, error } = useFetchData("https://roberts-data-api.robert-mccreary-713.workers.dev/api/v1/datasets/american-sign-language-alphabet/records?limit=26")

  if (loading) {
    return <h1>Loading...</h1>
  }
  console.log(records)

  const romanceLanguages = records.filter(  (item) => item.Branch === "Romance"  )
  const romanceSection = romanceLanguages.map( (item) => <LanguageCard item={item} /> )

  const polynesianSection = records.filter(  (item) => item.Branch === "Malayo-Polynesian"  )
                                   .map( (item) => <LanguageCard item={item} />)
  
  return (
    <>
      <div className="container">
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
