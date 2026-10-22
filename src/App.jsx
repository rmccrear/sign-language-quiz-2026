import useFetchData from "./useFetchData";

import "@picocss/pico/css/pico.css"
import "./App.css"

import LetterCard from "./LetterCard"

function App() {

  //const { records, loading, error } = useFetchData("https://roberts-data-api.robert-mccreary-713.workers.dev/api/v1/datasets/most-spoken-languages-worldwide/records?limit=20")
  const { records, loading, error } = useFetchData("https://roberts-data-api.robert-mccreary-713.workers.dev/api/v1/datasets/american-sign-language-alphabet/records?limit=26")

  if (loading) {
    return <h1>Loading...</h1>
  }
  console.log(records)

  const letterA = records[0]
  const letterB = records[1]
  const letterC = records[2]
  const letterT = records[19]

  return (
    <>
      <div className="container flex">
        <h1>Sign Language Quiz</h1>

        <LetterCard letterText={records[0].Letter} letterImage={records[0].Image}/>
        {/* <article>
          <h1>{records[0].Letter}</h1>
          <img className="letter-image" src={records[0].Image} />
        </article> */}


        <article>
          <h1>{records[1].Letter}</h1>
          <img className="letter-image" src={records[1].Image} />
        </article>


        <article>
          <h1>{records[2].Letter}</h1>
          <img className="letter-image" src={records[2].Image} />
        </article>




        <article>
          <h1>{records[15].Letter}</h1>
          <img
            className="letter-image"
            src={records[15]?.Image}
            alt="ASL hand sign P"
          />
        </article>
      </div>

      <div className="container">
        <article>
          <img src={records[2].Image} className="letter-image" />
          <img src={records[0].Image} className="letter-image"/>
          <img src={records[19].Image} className="letter-image"/>
        </article>





      </div>

    </>
  )
}

export default App;
