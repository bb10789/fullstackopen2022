import { useState } from 'react'

const Persons = ({persons, keyword}) => {

    const filterBySearch = () => {
        return persons.filter(nameObj =>
          nameObj.name.toLowerCase().includes(keyword.toLowerCase())
        )
      }


    return filterBySearch().map(person => <p>{person.name} {person.phone}</p>)
}


export default Persons