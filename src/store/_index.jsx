import { configureStore } from '@reduxjs/toolkit'
import { pokeReducer } from 'src/redux/PokeDuck'
import { userReducer as userReducer2 } from 'src/redux/userDuck'
import userReducer from 'src/redux/userSlice'
export default configureStore({
  reducer: {
    user: userReducer,
    pokemons: pokeReducer,
    user2: userReducer2
  }
})
