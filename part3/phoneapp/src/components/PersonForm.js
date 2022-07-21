import { useState } from 'react'
import personService from '../services/Persons'
import DeleteButton from './Delete'

const PersonForm = ({ persons, setPersons, id }) => {
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')


  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const entryExist = (nameObj) => {
    for (var i = 0; i < persons.length; i++) {
      if (JSON.stringify(persons[i]) === JSON.stringify(nameObj)) {
        return true
      }
    }
    return false
  }

  const nameExist = (nameObj) => {
    for (var i = 0; i < persons.length; i++) {
      if (JSON.stringify(persons[i].name) === JSON.stringify(nameObj.name)) {
        return true
      }
    }
    return false
  }

  const addNewEntry = (event) => {
    event.preventDefault()
    const nameObj = { name: newName, number: newPhone, id: id + 1 }
    if (entryExist(nameObj)) {
      alert(newName + " is already added to phonebook")
    } else if (nameExist(nameObj) && window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
      personService.update(persons.find(person => person.name === newName).id, nameObj)
      persons.find(person => person.name === newName)
      const updatedPersons = {...persons}
      let updateIndex = updatedPersons.findIndex(person => person.name === newName)
      updatedPersons[updateIndex] = newPhone
      setPersons(updatedPersons)
    } else {
      setPersons(persons.concat(nameObj))
      personService.create(nameObj).then(
        returnedPerson => setPersons(persons.concat(returnedPerson))
      )
      id += 1
    }


    setNewName('')
    setNewPhone('')
  }

  return (
    <form>
      <div>
        name: <input value={newName}
          onChange={handleNameChange} />
      </div>

      <div>
        phone: <input value={newPhone} onChange={handlePhoneChange} />
      </div>
      <div>
        <button type="submit"
          onClick={addNewEntry}>add</button>
      </div>
    </form>
  )
}


export default PersonForm;