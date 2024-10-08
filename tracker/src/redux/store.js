import { configureStore } from "@reduxjs/toolkit";
import { carsReducer, addCar, removeCar, changeSearchTerm } from "./store/slices/carsSlice";
import { formReducer, changeName, changeCost } from './store/slices/formSlice'

const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer
    }
})

export { store, changeName, changeCost, changeSearchTerm, addCar, removeCar };