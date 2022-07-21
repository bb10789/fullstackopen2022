import personService from '../services/Persons'

const Delete = ({person, persons, setPersons}) => {
    
    
    const removePerson = () => {
        if (window.confirm(`Delete ${person.name} ?`))
        personService.deletePerson(person.id).then(
            returnedPerson => setPersons(persons.filter(p => p.id !== person.id))
        )
    }

    return (
        <button onClick={removePerson}> delete</button>
    )
}

export default Delete