import { useState } from 'react'

const PersonForm = ({persons, setPersons}) => {
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
  
    const addNewEntry = (event) => {
      event.preventDefault()
      const nameObj = { name: newName, number: newPhone, id: persons.length}
      if (entryExist(nameObj)) {
        alert(newName + " is already added to phonebook")
      } else {
        setPersons(persons.concat(nameObj))
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