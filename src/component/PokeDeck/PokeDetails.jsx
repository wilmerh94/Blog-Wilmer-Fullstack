import { Button, CardActionArea } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { PokemonDetailsAction } from 'src/redux/PokeDuck'
export const PokeDetails = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = () => {
      dispatch(PokemonDetailsAction())
    }
    fetchData()
  }, [dispatch])

  const { singlePokemon: pokemon } = useSelector((store) => store.pokemons)
  return pokemon ? (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component='img' height='250' image={pokemon.photo} alt='pokemon' />
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='div'
            align='center'
            sx={{ textTransform: 'capitalize' }}>
            {pokemon.name}
          </Typography>
          <Typography variant='body2' align='center' color='text.secondary'>
            Weight:{pokemon.weight} | Height:{pokemon.height}
          </Typography>
          <Button component={Link} to={`/poke-deck/${pokemon.id}`} variant='contained' size='small'>
            More Details
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  ) : null
}
