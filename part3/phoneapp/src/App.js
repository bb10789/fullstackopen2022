import axios from 'axios'
import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/Persons'
import Notification from './components/Notification'


const App = () => {
  const [persons, setPersons] = useState([])
  const [keyword, setNewKeyword] = useState('')
  const [id, setId] = useState(0)
  const [operation, setOperation] = useState()
  const [message, setMessage] = useState('')


  const Operations = {
    Create: "Created",
    Update: "Updated",
    Error: "Error"
  }

  useEffect(() => {
    console.log('effect');
    personService.getAll().then(
      returnedPerson => {
        setPersons(returnedPerson)
        setId(Math.max(...persons.map(o => o.id)))
      }
    )
  }, [])

  const clearMessage= () => {
    setOperation(null)
    setMessage("")
  }

  console.log("IN APP", operation)


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification persons={persons} Operations={Operations} operation={operation} message={message} clearMessage={clearMessage}></Notification>
      <Filter persons={persons} keyword={keyword} setNewKeyword={setNewKeyword}></Filter>
      <h2>add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} setOperation={setOperation} 
      Operations={Operations} id={id} setMessage={setMessage}/>
      <h2>Numbers</h2>
      <Persons persons={persons} setPersons={setPersons} keyword={keyword} />
    </div>
  )
  }
export default App