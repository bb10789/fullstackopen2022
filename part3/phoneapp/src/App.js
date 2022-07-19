import axios from 'axios'
import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])

  const [keyword, setNewKeyword] = useState('')

  useEffect(() => {
    console.log('effect');
    axios.get('http://localhost:3001/persons').then(response => {
      console.log('promise fufilled')
      setPersons(response.data)
    })
  }, [])



  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} keyword={keyword} setNewKeyword={setNewKeyword}></Filter>
      <h2>add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <Persons persons={persons} keyword={keyword} />
    </div>
  )
  }
export default App