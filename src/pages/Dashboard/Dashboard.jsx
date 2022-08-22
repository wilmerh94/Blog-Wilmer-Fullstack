import { useEffect } from 'react'
import { Loading } from 'src/component/Loading/Loading'
import { useFirestore } from 'src/Hooks/useFirestore'
import {
  TableContainer,
  Typography,
  Table,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Toolbar,
  Box
} from '@mui/material'
import Divider from '@mui/material/Divider'

import IconButton from '@mui/material/IconButton'

import DeleteIcon from '@mui/icons-material/Delete'

import { formatDistanceToNow } from 'date-fns'

export const Dashboard = () => {
  const { data, error, loading, getData } = useFirestore()
  useEffect(() => {
    getData('users')
  }, [])

  if (loading) return <Loading />
  if (error) return <div>{error}</div>

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
      }}>
      <Box
        sx={{
          margin: '10px',
          width: '750px',
          minHeight: 2
        }}>
        <Paper sx={{ mb: 1 }}>
          <Toolbar
            sx={{
              borderRadius: '10px 10px 0px 0',
              minHeight: { md: '46px' },
              pl: { sm: 2 },
              pr: { xs: 1, sm: 1 },
              backgroundColor: '#ececec'
            }}>
            <Typography sx={{ flex: '1 1 100%' }} variant='h6' id='tableTitle' component='div'>
              Users
            </Typography>
          </Toolbar>
          <Divider orientation='horizontal' flexItem />
          <TableContainer
            component={Paper}
            sx={{ width: '750px', alignItems: 'center', borderRadius: '0px 0px 10px 10px' }}>
            <Table sx={{ minWidth: 650 }} size='small' aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700 }}>No.</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Name</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Email</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Status</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Created</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0, maxWidth: '100px' } }}>
                    <TableCell component='th' scope='row'>
                      {index + 1}
                    </TableCell>
                    <TableCell>{row.displayName}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.online ? 'Online' : 'Offline'} </TableCell>
                    <TableCell>
                      {formatDistanceToNow(row.timestamp.toDate(), {
                        addSuffix: true
                      })}
                    </TableCell>

                    <TableCell
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        mr: '0',
                        ml: '0',
                        p: '0'
                      }}>
                      <IconButton sx={{ ml: 0, mr: 0 }}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Box>
  )
}

// return (
//   <div>
//     <h1>Users:</h1>

//     <div>
//       {data.map((item) => (
//         <div key={item.id}>
//           <p>{item.displayName}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// )
