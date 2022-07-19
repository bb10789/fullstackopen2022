import { useState } from 'react'

const Persons = ({persons, keyword}) => {

    const filterBySearch = () => {
        return persons.filter(nameObj =>
          nameObj.name.toLowerCase().includes(keyword.toLowerCase())
        )
      }


    return filterBySearch().map(person => <p key={person.phone}>{person.name} {person.number}</p>)
}


export default Persons