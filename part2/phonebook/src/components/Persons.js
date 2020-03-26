import React from "react"

const Persons = ({persons, filter}) => (
  <ul>
    {
      persons.filter(person => person.name.indexOf(filter) !== -1)
      .map(person => (
        <li key={person.name}>
          {person.name} {person.number}
        </li>
      )
      )
    }
  </ul>
)

export default Persons