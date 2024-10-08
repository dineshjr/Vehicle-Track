import { useSelector } from "react-redux"

function CarValue() {
    const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
        const filteredCars = data.filter((car) => {
            return car.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        let cost = 0; // Initialize cost
        for(let car of filteredCars){
            cost += car.cost;
        }
        return cost // Use the cost, e.g., logging it
        
    })
    return (
        <>
            <div className="car-value">
                Total Cost :${totalCost}
            </div>
        </>
    )
}

export default CarValue