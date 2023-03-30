import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { carsReducer, addCar, removeCar, changeSearchTerm } from "./slices/carsSlice";
import { formReducer, changeCost, changeName } from "./slices/formSlice";
import { reset } from "./actions";
import { usersReducer } from "./slices/usersSlice";

const store = configureStore({
    reducer: {
        songs: songsReducer,
        movies: moviesReducer,
        cars: carsReducer,
        form: formReducer,
        users: usersReducer
    }
});

export { store, reset, addCar, removeCar, changeSearchTerm, changeCost, changeName, addMovie, removeMovie, addSong, removeSong };
export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
