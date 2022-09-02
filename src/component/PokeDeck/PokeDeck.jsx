import { Box, Button, Grid, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import {
  getPokemonAction,
  nextPokemonAction,
  PokemonDetailsAction,
  previousPokemonAction
} from 'src/redux/PokeDuck'
// Importing material UI components
import InfoIcon from '@mui/icons-material/Info'
import { PokeDetails } from './PokeDetails'

export const PokeDeck = () => {
  const dispatch = useDispatch() // With dispatch I give the order of what i need and with Selector I can save the data in the store
  const { results: pokemonsResults, next, previous } = useSelector((store) => store.pokemons)
  // Extracting the variables(initialState) inside of Redux store. from PokeDuck.jsx
  return (
    <Box
      sx={{
        marginTop: 7,
        marginBottom: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        '& button': { m: 1 }
      }}>
      <Box
        sx={{
          margin: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& button': { m: 1 }
        }}>
        <Typography gutterBottom variant='h6' component='h3' color='text.tertiary'>
          List of Pokemon
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
          {pokemonsResults.length === 0 && (
            <Button size='small' variant='contained' onClick={() => dispatch(getPokemonAction())}>
              Get Pokemon
            </Button>
          )}
          {next && (
            <Button
              size='small'
              variant='contained'
              color='success'
              onClick={() => dispatch(nextPokemonAction())}>
              Next
            </Button>
          )}
          {previous && (
            <Button size='small' variant='outlined' onClick={() => dispatch(previousPokemonAction())}>
              Previous
            </Button>
          )}
        </Box>
        <Box
          sx={{
            marginTop: 1,
            marginBottom: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
          <Grid container spacing={8}>
            <Grid item xs={12} md={12} lg={12}>
              <List>
                {pokemonsResults.map((item) => (
                  <ListItem
                    key={item.name}
                    secondaryAction={
                      <IconButton edge='end' onClick={() => dispatch(PokemonDetailsAction(item.url))}>
                        <InfoIcon />
                      </IconButton>
                    }>
                    <ListItemText
                      primary={item.name}
                      sx={{
                        mr: '15px',
                        textTransform: 'capitalize',
                        '& .MuiTypography-root': { color: 'text.tertiary' }
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          margin: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
        <Typography gutterBottom variant='h6' component='h3' color='text.tertiary'>
          Pokemon Details
        </Typography>

        <PokeDetails />
      </Box>
    </Box>
  )
}
