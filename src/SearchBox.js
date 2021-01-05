import React from 'react'

const SearchBox = ({searchValue,setSearchValue}) => {
    return (
        <div className='col col-sm-4' >
            <br></br>
            <input className='form-control' placeholder='Type to Search..' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}></input>
        </div>
    )
}
export default SearchBox;