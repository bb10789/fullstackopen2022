import { useState } from 'react'
import DeleteButton from './Delete'

const Persons = ({ persons, setPersons, keyword }) => {

  const filterBySearch = () => {
    return persons.filter(nameObj =>
      nameObj.name.toLowerCase().includes(keyword.toLowerCase())
    )
  }


  return filterBySearch().map(
    person => <p key={person.id}>{person.name} {person.number}
      <DeleteButton persons={persons} setPersons={setPersons} person={person}> </DeleteButton>
    </p>)
}


export default Persons