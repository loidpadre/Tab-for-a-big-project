import { useEffect, useState } from 'react'
import {FaAngleDoubleRight} from "react-icons/fa"
import './App.css'
const url = 'https://course-api.com/react-tabs-project'
function App() {

  const [data, setData] = useState([])
  const [indexValue, setIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  const fatchdata = async () => {
    const response = await fetch(url)
    const newData = await response.json()
    setData(newData)
    setLoading(false)
  }

  useEffect(() => {
    fatchdata()
  }, [])

  if(loading){
    return(
      <section className='loading'>
        <h1>Loading...</h1>
      </section>
    )
  }
  // const handleTommy = () => {
  //   setIndex(0)
  // }
  // const handleBigdrop = () => {
  //   setIndex(1)
  // }
  // const handleCuker = () => {
  //   setIndex(2)
  // }

  const {title, dates, duties, company } = data[indexValue]
  return (
    <div className='container'>
      <div className="title">
        <h1>Experience</h1>
        <div className='under-line'></div>
      </div>
      <div className='jobs'>
        <div className='bts'>
            {/* botaos */}
            {/* <button onClick={handleTommy}>TOMMY</button>
            <button onClick={handleBigdrop}>GIBDROP</button>
            <button onClick={handleCuker}>CUKER</button> */}
            {
              data.map((item, index) => {
                return <button key={item.id}
                 onClick={() => setIndex(index)}
                 className={`btn ${index === indexValue && "active-btn"}`}
                 >
                  {item.company}
                </button>
              })
            }
        </div>
          <article className='job-info'>
            {/* informacoes do trabalho */}
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className='dates'>{dates}</p>
            {
              duties.map((duty, index)=>(
                <div className='duty'key={index}>
                  <FaAngleDoubleRight className='icon'></FaAngleDoubleRight>
                  <p>{duty}</p>
                </div>
              ))
            }
          </article>   
      </div>
    </div>
  )
}

export default App
