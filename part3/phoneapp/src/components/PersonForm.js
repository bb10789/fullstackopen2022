import { useState } from 'react'
import personService from '../services/Persons'
import DeleteButton from './Delete'

const PersonForm = ({ persons, setPersons, id, setOperation, Operations, setMessage}) => {
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
        .then(response => {
          setPersons(persons =>
            persons.map(person => {
              if (person.name === newName) {
                return { ...person, number: newPhone }
              }
              return person
            })
          )
    
        setOperation(Operations.Update)
        setMessage("Updated " + newName)
        })
        .catch((error) => {
          setOperation(Operations.Error)
          setMessage(`Information of ${newName} has already been removed from server` )
          console.log(error)
        }
      )
    } else {
      setPersons(persons.concat(nameObj))
      personService.create(nameObj).then(
        returnedPerson => setPersons(persons.concat(returnedPerson))
      )
      id += 1
      setOperation(Operations.Create)
      setMessage("Created " + newName)
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