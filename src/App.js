
import './App.css';
import Todos from './Todos'
import { useDispatch} from 'react-redux'
import store from './store/index'
import {ActionTypes} from './contstants/action-types'
import { useSelector } from 'react-redux'
import {useEffect, useState} from 'react'
import axios from 'axios'
import Confetti from 'react-confetti'
import { fetchProductsBegin, fetchProductsSuccess, fetchProductsFailure, fetchQuotesBegin, fetchQuotesSuccess, fetchQuotesFailure, fetchBackgroundBegin, fetchBackgroundSuccess, fetchBackgroundFailure } from './actions/apiActions';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


 const selectWeather = state => state.weather
 const selectQuotes = state => state.quotes
 const selectBackground = state => state.background




function App() {
  const backgroundImage = useSelector(selectBackground)
  let [counter, setCounter] = useState(0)
  const [background, setBackground] = useState('https://images.unsplash.com/photo-1502082553048-f009c37129b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzI2Njd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzYwNDQ0MjA&ixlib=rb-1.2.1&q=80&w=1080')
  const [show, setShow] = useState(true)
  const [showLeft, setShowLeft] = useState(false)

 
  const weather = useSelector(selectWeather)
  const quotes = useSelector(selectQuotes)

  console.log(quotes)
  console.log(backgroundImage)
  console.log(weather.weather.temperature)
  const dispatch = useDispatch()
  
  



 
 let list= []
 
 useEffect(() => {
  const fetchQuoteData = () => {
    return async dispatch => {
      dispatch(fetchQuotesBegin())
        return await axios.get('https://quotes.rest/qod?language=en')
            .then(response => {
              dispatch(fetchQuotesSuccess(response))
               console.log(response)
               
             })
             .catch(error => dispatch(fetchQuotesFailure(error)))
    }
}
store.dispatch(fetchQuoteData())  


}, [dispatch])

// useEffect(() => {
//   document.body.style.backgroundImage = `url('${background}')`;
//   console.log('red')
// }, [background]);

useEffect(() => {
  const fetchData = () => {
    return async dispatch => {
      dispatch(fetchProductsBegin())
      return await axios.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=833d6bab104b69d5f1d4e30dcf52e1cd&units=metric')
      .then(response => {
        dispatch(fetchProductsSuccess(response))
        console.log(response)
      })
       .catch(error => dispatch(fetchProductsFailure(error)))
    }
  }
  store.dispatch(fetchData()) 
 
}, [dispatch])
useEffect(() => { 
  const fetchPhotoData = () => {
  return async dispatch => {
    dispatch(fetchBackgroundBegin())
    return await axios.get(`https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=Xgxj9ylhbzZhHDuRydj5jauvyjt6hPbfjUDCMY-q9sU&count=10`)
    
    .then(response => {
      dispatch(fetchBackgroundSuccess(response))
      
      console.log(response)
      
    })
    .catch(error => dispatch(fetchBackgroundFailure(error)))
  }
  }
  store.dispatch(fetchPhotoData()) 
}, [dispatch])
let len =10
const handleClick = () => {
  if (counter < len -1 ){
  setCounter(counter +=1)
  setShow(true)
  setShowLeft(true)
  console.log(counter)
  setBackground(backgroundImage.backgrounds[0][counter].urls.regular)
  }
  else {
    setShow(false)
  }

}
const handleLeftClick = () => {
  if (counter === 0){
    setShowLeft(false)
 
  }
  else {
    setShowLeft(true)
    setShow(true)
    setCounter(counter -=1)
    setBackground(backgroundImage.backgrounds[0][counter].urls.regular)
  }

}







    
  return (
    <div className="app" >
      <div className='background-image-container' style={{backgroundImage: `url(${background})`}}>
      
      </div>
      <header>
      <div className='weather'>
      <img src={`http://openweathermap.org/img/wn/${weather.weather.icon}@2x.png`} />
      <div className='weather__measurements'>
        <h4>{weather.weather.temperature}</h4>
      <h5>{weather.weather.conditions}</h5>
      </div>
      
      </div>
     </header>
     
    <Todos />
    {show ?  
    <ArrowForwardIosIcon onClick={handleClick}  style={{position: 'absolute', top: '50vh', right: 0, cursor: 'pointer' }} />
    : ''}
     {showLeft ? <ArrowBackIosIcon onClick={handleLeftClick} style={{position: 'absolute', top: '50vh', left: 0, cursor: 'pointer' }}/> : '' }
           
    <div className='quotes'>
    <div className='quote'>
      <FormatQuoteIcon />
      <h5> {quotes.quotes.quote}</h5>
      <FormatQuoteIcon />
      </div>
      <p>{quotes.quotes.author}</p>
    </div>
 
    </div>
  );
}

export default App;
