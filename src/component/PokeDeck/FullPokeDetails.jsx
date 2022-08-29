import { Box, Card, CardContent, CardMedia, Typography, useTheme } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { PokemonDetailsAction } from 'src/redux/PokeDuck'
import { Loading } from '../Loading/Loading'

export const FullPokeDetails = () => {
  // const { shadows } = useTheme()
  console.log(useTheme())
  const dispatch = useDispatch()
  const params = useParams()
  const url = `https://pokeapi.co/api/v2/pokemon/${params.pokeId}`
  useEffect(() => {
    dispatch(PokemonDetailsAction(url))
  }, [params.pokeId])

  const { singlePokemon: pokemon } = useSelector((store) => store.pokemons)
  // const bgLinear = `linear-gradient(to top,rgba(0, 0, 0, 0.7) 50%,rgba(0, 0, 0, 0.3) 85%, transparent) no-repeat scroll 0 0 `

  let bgLinearColor
  let bgLinearColor2
  if (pokemon.type === 'fire') {
    bgLinearColor = 'rgba(247, 55, 24, 0.7)'
    bgLinearColor2 = 'rgba(247, 55, 24, 0.3)'
  } else if (pokemon.type === 'water') {
    bgLinearColor = 'rgba(29,162,216, 0.7)'
    bgLinearColor2 = 'rgba(29,162,216, 0.3)'
  } else if (pokemon.type === 'electric') {
    bgLinearColor = 'rgba(255, 228, 179, 0.7)'
    bgLinearColor2 = 'rgba(255, 228, 179, 0.3)'
  } else if (pokemon.type === 'bug') {
    bgLinearColor = 'rgba(186, 206, 89, 0.7)'
    bgLinearColor2 = 'rgba(186, 206, 89, 0.3)'
  } else if (pokemon.type === 'ground') {
    bgLinearColor = 'rgba(190, 150, 118, 0.7)'
    bgLinearColor2 = 'rgba(190, 150, 118, 0.3)'
  } else if (pokemon.type === 'poison') {
    bgLinearColor = 'rgba(40, 20, 86, 0.7)'
    bgLinearColor2 = 'rgba(40, 20, 86, 0.3)'
  } else if (pokemon.type === 'fairy') {
    bgLinearColor = 'rgba(242,193,209, 0.7)'
    bgLinearColor2 = 'rgba(242,193,209, 0.3)'
  } else {
    bgLinearColor = 'rgba(0, 0, 0, 0.7)'
    bgLinearColor2 = 'rgba(0, 0, 0, 0.3)'
  }
  const bgLinear = `linear-gradient(to top,${bgLinearColor} 50%,${bgLinearColor2} 85%, transparent) no-repeat scroll 0 0 `
  console.log(pokemon.type)

  return !pokemon ? (
    <Loading />
  ) : (
    <Box
      sx={{
        marginTop: 8,
        marginBottom: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        '& button': { m: 1 }
      }}>
      <Card
        sx={{
          width: '340px',
          maxWidth: 345,
          height: '320px',
          borderRadius: '50px',
          boxShadow: 'rgba(black, 0.66) 0 30px 60px 0,inset #333 0 0 0 5px,inset rgba(white, 0.5) 0 0 0 6px',
          background: bgLinear,
          overflow: 'hidden',
          margin: '10px',
          transformStyle: 'preserve-3d'
        }}>
        <CardMedia
          sx={{
            flex: 1,
            position: 'relative',
            bottom: 0,
            transform: 'perspective(800px)',
            transition: '0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1)'
          }}
          component='img'
          height='350'
          image={pokemon.photo}
          alt='pokemon'
        />
        <CardContent
          sx={{
            position: 'absolute',
            top: 220,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
            textTransform: 'capitalize',
            textShadow: '5px 0px 6px rgba(0,0,0, 0.95) '
          }}>
          <Typography
            paragraph
            gutterBottom
            variant='h4'
            component='div'
            align='center'
            sx={{
              fontFamily: 'Playfair Display',
              fontWeight: '800'
            }}>
            {pokemon.name}
          </Typography>
          <Typography variant='body2' align='center'>
            Weight:{pokemon.weight} | Height:{pokemon.height}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}
