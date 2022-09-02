/* eslint-disable no-unused-vars */
import { Box, IconButton } from '@mui/joy'
import DeleteIcon from '@mui/icons-material/Delete'

import EditIcon from '@mui/icons-material/Edit'
import { useFirestore } from 'src/Hooks/useFirestore'

export const UserActions = ({ params, rowId, setRowId }) => {
  const { loading } = useFirestore()
  //   console.log(rowId, params.id)
  //   const [text, setText] = useState('')
  //   const [idEdit, setIdEdit] = useState()

  const handleSubmit = async () => {}

  //   const handleDelete = async (nanoid) => {
  //     await deleteData('users', nanoid)
  //   }

  //   const handleEdit = async (row) => {
  //     setText(row.displayName)
  //     setIdEdit(true)
  //     setOpen(true)
  //   }

  return (
    <Box sx={{ position: 'relative', justifyContent: 'space-around' }}>
      <IconButton
        size='md'
        sx={{ width: 40, m: 0.25 }}
        //   onClick={ () => handleDelete(row) }
      >
        <DeleteIcon />
      </IconButton>
      <IconButton
        size='md'
        sx={{ width: 40, m: 0.25 }}
        disabled={params.id !== rowId}
        //   onClick={handleSubmit}
        //   onClick={ () => handleEdit(row) }
      >
        <EditIcon />
      </IconButton>
    </Box>
  )
}
