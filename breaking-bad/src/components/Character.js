import React from 'react'
import Item from './Item'

function Character({item,loading}) {
    return loading?(<h1>loading</h1>): <div className="cards">
      {item.map(item=>(
          <Item item={item}/>
      ))}
    </div>
}

export default Character
