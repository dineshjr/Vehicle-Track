import { useDispatch, useSelector } from 'react-redux'
import { removeCar } from '../redux/store/slices/carsSlice'
function CarList() {
    const dispatch = useDispatch()
    // const cars = useSelector((state) => {
    //     return state.cars.data
    // })

    const cars = useSelector(({ cars: { data, searchTerm } }) => {
        return data.filter((car) =>
            car.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    })

    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id))


    }
    const renderedCars = cars.map((car) => (
        <li key={car.id} className='panel'> {/* Ensure each li has a unique key prop based on car.id */}
            {car.name} - ${car.cost} {/* Render car name and cost */}
            <button className='button is-danger' onClick={() => handleCarDelete(car)}>Delete</button> {/* Render delete button */}
        </li>
    ));
    return (
        <>
            <div className='car-list'>
                {renderedCars}
            </div>
        </>
    )
};

export default CarList