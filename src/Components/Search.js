import axios from 'axios'
import React, { useState } from 'react'


const search_api = 'https://api.themoviedb.org/3/search/movie?api_key=d0b88ad225e04bcb752df9880f15c3b5&query='


const Search = ({setMovies}) => {

    const [query,setQuery] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()

        axios.get(search_api + query).then(res=>setMovies(res.data.results))

        setQuery('')
    }
    return (
        <header>
            <form onSubmit={handleSubmit}>
                <input className="search" type="text" placeholder="Search..." value={query} onChange={e=>setQuery(e.target.value)} />
            </form>
        </header>
    )
}

export default Search
