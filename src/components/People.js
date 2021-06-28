import React from 'react'
import { useQuery } from 'react-query'

import Person from './Person'

const fetchPoeple = async () => {
    const res = await fetch('https://swapi.dev/api/people/')
    return res.json();
}

const People = () => {
    const {data, status} = useQuery('people', fetchPoeple)

    console.log(data)

    return (
        <div>
            <div>
                <h2>People</h2>

                {status === "loading" && (
                    <div>Loading data ... </div>
                )}

                {status === "error" && (
                    <div>Error fetching data</div>
                )}

                {status === "success" && (
                    <div>
                        {data.results.map(person => {
                            return (
                                <div key={person.name} >
                                    <Person person={person} />
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}

export default People
