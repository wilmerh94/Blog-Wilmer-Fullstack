import axios from 'axios'

// Const
const initialState = {
  count: 0,
  next: null,
  previous: null,
  results: []
}

// Types (action.types)
const GET_POKEMONS = 'GET_POKEMONS'
const NEXT_POKEMONS = 'NEXT_POKEMONS'
const PREVIOUS_POKEMONS = 'PREVIOUS_POKEMONS'
const POKE_INFO = 'POKE_INFO'

// Reducer
export const pokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return { ...state, ...action.payload }
    case NEXT_POKEMONS:
      return { ...state, ...action.payload }
    case PREVIOUS_POKEMONS:
      return { ...state, ...action.payload }
    case POKE_INFO:
      return { ...state, singlePokemon: action.payload }
    default:
      return state
  }
}

// Actions

// ! Actions for Multiple Choices

// eslint-disable-next-line no-unused-vars
export const getPokemonAction = () => async (dispatch, getState) => {
  if (localStorage.getItem('offset=0')) {
    // Using if condition if the user already got data from the API server and storage in their localStorage
    dispatch({
      type: GET_POKEMONS,
      payload: JSON.parse(localStorage.getItem('offset=0')) // I'm making JSON a easy way to read after use stringify
    })
    return
  }
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`)

    dispatch({
      type: GET_POKEMONS,
      payload: res.data
    })
    // With JSON.stringify I'm changing the data to JSON
    localStorage.setItem('offset=0', JSON.stringify(res.data))
  } catch (err) {
    console.log(err)
  }
}

// eslint-disable-next-line no-unused-vars
export const nextPokemonAction = () => async (dispatch, getState) => {
  const { next } = getState().pokemons
  if (localStorage.getItem(next)) {
    dispatch({
      type: NEXT_POKEMONS,
      payload: JSON.parse(localStorage.getItem(next))
    })
    return
  }
  try {
    const res = await axios.get(next)
    dispatch({
      type: NEXT_POKEMONS,
      payload: res.data
    })
    localStorage.setItem(next, JSON.stringify(res.data))
  } catch (error) {
    console.log(error)
  }
}

export const previousPokemonAction = () => async (dispatch, getState) => {
  const { previous } = getState().pokemons
  if (localStorage.getItem(previous)) {
    dispatch({
      type: PREVIOUS_POKEMONS,
      payload: JSON.parse(localStorage.getItem(previous))
    })
    return
  }

  try {
    const res = await axios.get(previous)
    dispatch({
      type: PREVIOUS_POKEMONS,
      payload: res.data
    })
    localStorage.setItem(previous, JSON.stringify(res.data))
  } catch (error) {
    console.log(error)
  }
}

// ! Actions for a single one

export const PokemonDetailsAction = (url) => async (dispatch) => {
  if (localStorage.getItem(url)) {
    dispatch({
      type: POKE_INFO,
      payload: JSON.parse(localStorage.getItem(url))
    })
    return
  }

  try {
    const res = await axios.get(url)
    dispatch({
      type: POKE_INFO,
      payload: {
        id: res.data.id,
        name: res.data.name,
        weight: res.data.weight,
        height: res.data.height,
        type: res.data.types[0].type.name,
        photo: res.data.sprites.other['official-artwork'].front_default
      }
    })
    // because I just need something specific i have to de JSON STRINGIFY
    localStorage.setItem(
      url,
      JSON.stringify({
        id: res.data.id,
        name: res.data.name,
        weight: res.data.weight,
        height: res.data.height,
        photo: res.data.sprites.other['official-artwork'].front_default
      })
    )
  } catch (error) {
    console.log(error)
  }
}
