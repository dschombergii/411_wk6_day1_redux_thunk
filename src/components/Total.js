import React from 'react'
import AddCar from './AddCar'

const Total = (props) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Total:</h1>
            {/* change 4 to props.cars.length */}
            <h1>{props.cars.length}</h1>
        </div>
    )
}

export default Total