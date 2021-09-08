import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const PersonCard = props => {
    return (
        <div className="App">
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {props.age}</p>
            <p>Hair color: {props.hairColor}</p>
            <button onClick={ () => alert("This is a button alert") }>Click me for an alert.</button>
        </div>
    )
}

export default PersonCard
