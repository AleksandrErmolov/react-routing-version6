import React, { useState } from 'react'


export default function BlogFilter({ postQuery, latest, setSearchParams }) {
    
    const [search, setSearch] = useState(postQuery);
    const [checked, setCheked] = useState(latest)


    const handleSumbit = (e) => {
        e.preventDefault();
        const form = e.target;
        const query = form.search.value
        const isLatest = form.latest.checked;
        const params = {}

        if (query.length) params.post = query;
        if (isLatest) params.latest = true;
        setSearchParams(params)
    }

    return (
        <div>
            <form autoComplete='off' onSubmit={handleSumbit}>
                <input type="search" name='search' value={search} onChange={e => setSearch(e.target.value) }/>
                <label style={{ padding: '0 1rem' }}>
                    <input type="checkbox" name='latest' checked={checked} onChange={e => setCheked(e.target.checked)} /> New only
                </label>
                <input type="submit" value='Search' />
            </form>
 
        </div>
    )
}
