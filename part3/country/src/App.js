import { useEffect, useState } from "react";
import axios from 'axios';
import Filter from './components/Filter'
import Display from './components/Display'

function App() {
  const [countries, setCountries] = useState()
  const [keyword, setKeyword] = useState('')



  useEffect(() => {  
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response =>{
      console.log('promise fulfilled');
      setCountries(response.data)
    })
  }, [])


  return (
    <div>
      <Filter keyword={keyword} setKeyword={setKeyword}/>
      <Display keyword={keyword} countries={countries}></Display>
    </div>

  )

}

export default App;
