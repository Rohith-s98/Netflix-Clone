import React,{useEffect,useState} from 'react'
import Youtube from 'react-youtube'
import './RawPost.css'
import axios from '../../axios'
import { imageUrl,API_KEY } from '../../constants/constants';
import ReactPlayer from 'react-player/youtube';


function RawPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId,setUrlId]=useState('');
  useEffect(()=>{
    axios.get(`${props.url}`).then(response=>{
      // console.log(response.data.results);
      setMovies(response.data.results)
      // console.log(`movies:${movies}`);
    }).catch(err=>{alert("network error")})
  })
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie=(id)=>{
   axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
    console.log(response.data.results)
    if(response.data.results.length!==0){
      setUrlId(response.data.results[0]);
    }else{console.log("array empty")}
   })
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
          )
          }
        </div>
        {urlId && <ReactPlayer playing='true' onPause={()=>{
          setUrlId(null)
        }} className="reactPlayer" url={`https://www.youtube.com/watch?v=${urlId.key}`} width='100%'/>}
    </div>
  )
}

export default RawPost