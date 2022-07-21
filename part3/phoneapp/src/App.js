import axios from 'axios'
import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/Persons'


const App = () => {
  const [persons, setPersons] = useState([])
  const [keyword, setNewKeyword] = useState('')
  const [id, setId] = useState(0)

  useEffect(() => {
    console.log('effect');
    personService.getAll().then(
      returnedPerson => {
        setPersons(returnedPerson)
        setId(Math.max(...persons.map(o => o.id)))
      }
    )
  }, [])



  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} keyword={keyword} setNewKeyword={setNewKeyword}></Filter>
      <h2>add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} id={id} />
      <h2>Numbers</h2>
      <Persons persons={persons} setPersons={setPersons} keyword={keyword} />
    </div>
  )
  }
export default App