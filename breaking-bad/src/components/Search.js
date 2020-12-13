import React, { useState } from 'react'

function Search({getquery}) {
    const [text,settext] =useState('')
     const handle =(search)=>{
        settext(search)  
        console.log(search)
         getquery(search)
     }
    return (
     
        <div  className ="search">
        <form>
            <input
            type="text"
            className="form-control"
            value={text}
            onChange={(e)=>handle(e.target.value)}>

            </input>
        </form>
            
        </div>
    )
}

export default Search
