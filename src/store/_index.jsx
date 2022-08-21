import { configureStore } from '@reduxjs/toolkit'
import { pokeReducer } from 'src/redux/PokeDuck'
import { userReducer } from 'src/redux/userDuck'
export default configureStore({
  reducer: {
    pokemons: pokeReducer,
    user: userReducer
  }
})
