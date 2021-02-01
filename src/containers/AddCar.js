import { connect } from 'react-redux'
import AddCar from '../components/AddCar'
import { addCar } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCar: (car) => dispatch(addCar(car))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCar)
