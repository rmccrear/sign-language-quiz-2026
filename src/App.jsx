import useFetchData from "./useFetchData";

import "@picocss/pico/css/pico.css"
import "./App.css"

function App() {

  //const { records, loading, error } = useFetchData("https://roberts-data-api.robert-mccreary-713.workers.dev/api/v1/datasets/most-spoken-languages-worldwide/records?limit=20")
  const { records, loading, error } = useFetchData("https://roberts-data-api.robert-mccreary-713.workers.dev/api/v1/datasets/american-sign-language-alphabet/records?limit=20")

  if(loading) {
    return <h1>Loading...</h1>
  }
  console.log(records)
  console.log(records[0].Image)

  const letterA = records[0]
  const letterB = records[1]
  const letterC = records[2]
  const letterT = records[19]

  return (
    <div className="container">
      <h1>Sign Language Quiz</h1>

      <article data-theme="light">
        <h1>{records[0].Letter}</h1>
        <img src={records[0].Image} />
      </article>



    </div>
  )
}

export default App;
