import React from 'react'
import { useQuery } from 'react-query'

import Planet from './Planet'

const fetchPlanets = async () => {
    const res = await fetch('https://swapi.dev/api/planets/')
    return res.json();

}

const Planets = () => {

    const {data, status} = useQuery('planets', fetchPlanets)

    return (
        <div>
            <div>
                <h2>Planets</h2>

                {status === "loading" && (
                    <div>Loading data ... </div>
                )}

                {status === "error" && (
                    <div>Error fetching data</div>
                )}

                {status === "success" && (
                    <div>
                        {data.results.map(planet => {
                            return (
                                <div key={planet.name} >
                                    <Planet planet={planet} />
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Planets
