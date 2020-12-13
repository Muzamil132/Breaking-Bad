import React from 'react'
import '../App.css'
function Item({item}) {
    return (
      <div className="card" style={{width:'18rem'}}>
      <img style={{height:"300px "}} className="img-fluid" src={item.img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><strong>Actor Name:</strong> {item.portrayed}</li>
        <li className="list-group-item"><strong>Nickname:</strong> {item.nickname}</li>
        <li className="list-group-item">  <strong>Birthday:</strong> {item.birthday}</li>
        <li className="list-group-item">  <strong>Status:</strong> {item.status}  </li>
      </ul>
      
    </div>
    )
}

export default Item
