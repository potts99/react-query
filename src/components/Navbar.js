import React from 'react'

const Navbar = ({ setPage }) => {
    return (
        <div>
            <nav>
                <button onClick={() => setPage('planets')}>Planets</button>
                <button onClick={() => setPage('people')}>People</button>
            </nav>
        </div>
    )
}

export default Navbar
