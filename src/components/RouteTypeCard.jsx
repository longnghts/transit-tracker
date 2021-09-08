import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const RouteTypeCard = props => {
    return (
        <div className="App card p-3" style={{maxWidth: '400px', display: 'flex', justifyContent: 'center'}}>
            <h5>Select Mode of Transportation and <br/> Train line / Bus number</h5>

            <form action="">
                <label for="transitType">Mode of transit</label> <br/>
                <input type="select" htmlFor="transitType"></input><br/><br/>
                <label for="lineRoute">Train Line/ Bus Number</label> <br/>
                <input type="select" htmlFor="lineRoute"></input><br/><br/>
                <input type="submit" value="Submit" className="btn btn-primary"></input><br/>
            </form>
            
        </div>
    )
}

export default RouteTypeCard