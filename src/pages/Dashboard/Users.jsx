import { Avatar, Box, Typography } from '@mui/joy'
import { DataGrid, gridClasses } from '@mui/x-data-grid'
import { useEffect, useMemo, useState } from 'react'
import { useFirestore } from 'src/Hooks/useFirestore'
import { formatDate } from 'src/utils/formatTime'
import { UserActions } from './UserActions'

// ----------------------------------------------------------------------

export const Users = () => {
  // eslint-disable-next-line no-unused-vars
  const { loading, data: users, error, getData, addData, deleteData, updateData } = useFirestore()
  const [pageSize, setPageSize] = useState(5)
  const [rowId, setRowId] = useState(null)
  console.log(rowId)

  const handleEdit = async (params) => {
    console.log(params)
    setRowId(params.id)
  }
  const columns = useMemo(
    () => [
      {
        field: 'photoURL',
        headerName: 'Avatar',
        width: 80,
        renderCell: (params) => <Avatar src={params.row.photoURL} />,
        sortable: false,
        filterable: false
      },
      { field: 'displayName', headerName: 'Name', width: 220, editable: true },
      { field: 'email', headerName: 'Email', width: 230 },
      { field: 'online', headerName: 'Status', width: 100, type: 'boolean', editable: true },
      {
        field: 'timestamp',
        headerName: 'Created At',
        width: 220,
        renderCell: (params) => formatDate(params.row.timestamp)
      },
      // {
      //   field: 'role',
      //   headerName: 'Role',
      //   width: 150,
      //   type: 'singleSelect',
      //   valueOptions: ['basic', 'editor', 'admin'],
      //   editable: true
      // },
      {
        field: 'actions',

        headerName: 'Actions',

        type: 'actions',
        renderCell: (params) => <UserActions {...{ params, rowId, setRowId }} />
      }
    ],
    [rowId]
  )
  useEffect(() => {
    users.length === 0 && getData('users')
  }, [])

  return (
    <Box sx={{ height: { sm: 400, md: 500 }, width: { sm: 800, md: 1200 }, bgcolor: 'background.level1' }}>
      <Typography level='h3' sx={{ textAlign: 'center', mt: 3, mb: 3 }}>
        Manage Users
      </Typography>
      <DataGrid
        columns={columns}
        rows={users}
        getRowId={(row) => row.id}
        rowsPerPageOptions={[5, 10, 20]}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 5,
          bottom: params.isLastVisible ? 0 : 5
        })}
        sx={{
          [`& .${gridClasses.footerContainer}`]: {
            bgcolor: 'background.level1'
          },
          [`& .${gridClasses.virtualScroller}`]: {
            bgcolor: 'background.level1'
          }
        }}
        onCellEditStop={handleEdit}
      />
    </Box>
  )
}
