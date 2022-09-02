import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import { Box, Card, CardContent, CardCover, IconButton, Typography } from '@mui/joy'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { PokemonDetailsAction } from 'src/redux/PokeDuck'
import { colorTypeGradients } from 'src/utils/ColorPokeCard'
export const PokeDetails = () => {
  const { singlePokemon: pokemon } = useSelector((store) => store.pokemons)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = () => {
      dispatch(PokemonDetailsAction())
    }
    fetchData()
  }, [dispatch])

  const URL = (number) => (pokemon ? `https://pokeapi.co/api/v2/pokemon/${pokemon.id + number}` : '')
  let finalColor = pokemon ? colorTypeGradients(pokemon.type) : 'rgba(0,0,0, 0.8)'

  return pokemon ? (
    <Card
      sx={{
        minHeight: 320,
        minWidth: 320,
        paddingTop: 1,
        overflow: 'hidden',
        paddingBottom: 1,
        background: `linear-gradient(to top, ${finalColor} 50%, rgba(0,0,0, 0.25) 85%, transparent) no-repeat scroll 0 0 `
      }}>
      <CardContent
        sx={{
          flexDirection: 'row',
          justifyContent: 'space-between'
          // display: 'flex',
          // gap: 1.5,
          // mt: 'auto',
          // py: 1.5,
          // px: 'var(--Card-padding)',
          // borderTop: '1px solid',
          // borderColor: 'neutral.outlinedBorder',
          // bgcolor: 'background.level1'
        }}>
        <IconButton
          sx={{ position: 'relative', top: '-3.5rem', left: '0.5rem' }}
          component={Link}
          to={`/poke-deck/${pokemon.id}`}
          variant='plain'
          size='md'>
          <ExpandCircleDownIcon />
        </IconButton>
        <Box>
          <IconButton variant='plain' size='md' onClick={() => dispatch(PokemonDetailsAction(URL(-1)))}>
            <NavigateBeforeIcon />
          </IconButton>
          <IconButton variant='plain' size='md' onClick={() => dispatch(PokemonDetailsAction(URL(+1)))}>
            <NavigateNextIcon />
          </IconButton>
        </Box>
      </CardContent>
      <CardCover>
        <img src={pokemon.photo} alt={pokemon.name} />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.2), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0) 300px)'
        }}
      />
      <CardContent
        // variant='soft'
        sx={{
          justifyContent: 'flex-end'
          // display: 'flex',
          // gap: 1.5,
          // mt: 'auto',
          // py: 1.5,
          // px: 'var(--Card-padding)',
          // borderTop: '1px solid',
          // borderColor: 'neutral.outlinedBorder',
          // bgcolor: 'background.level1'
        }}>
        <Typography
          level='h1'
          align='center'
          fontSize='xl2'
          color='text.tertiary'
          sx={{ fontFamily: 'Playfair Display', mt: 2, textTransform: 'capitalize' }}>
          {pokemon.name}
        </Typography>
        <Typography
          level='body2'
          color='text.tertiary'
          align='center'
          sx={{ mt: 0.5, mb: 2, textTransform: 'capitalize' }}>
          Weight:{pokemon.weight} | Height:{pokemon.height}
        </Typography>
      </CardContent>
    </Card>
  ) : null
}
