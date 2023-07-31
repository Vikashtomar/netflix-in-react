import React,{useState} from 'react'
import axios from 'axios';


function Home() {
  const [movie, setMovie] = useState('');

  let imgpath = "https://image.tmdb.org/t/p/original"

  const [moviedata, setmovieData] =  useState([])

  function movies(){
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ea85630803e293cff396198c4410a67b&language=en-US&query=${movie}&page=1&include_adult=false`)
    .then((res)=>{
      console.log(res)
      setmovieData(res.data.results)
    })
  }
  console.log(moviedata)

  return (
    <div>
      <h1>Search Movies</h1>
      <input type="text" placeholder='search movie' value={movie} onChange={(e)=>setMovie(e.target.value)} />

      {moviedata.map((val)=>{
        const {poster_path,original_title,overview} = val;
        return(

          <>
          <img src={imgpath + poster_path} alt="okay" />
          <li>{original_title}</li><br/>
          <h3>
          {overview}
          </h3>
          </>
        )
      })}
      <button  onClick={movies}>click</button>
      
        </div>
  )
}

export default Home