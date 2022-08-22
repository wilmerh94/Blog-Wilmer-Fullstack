import { LoadingButton } from '@mui/lab'
import { useEffect, useState } from 'react'
import { useFirestore } from 'src/Hooks/useFirestore'

export const Projects = () => {
  const { loading, data, error, getData, addData, deleteData, updateData } = useFirestore()
  const [text, setText] = useState('')
  const [idEdit, setIdEdit] = useState()

  useEffect(() => {
    console.log('getData')

    getData('shopping')
  }, [])
  if (loading.getData) return <p>Loading get Data</p>
  if (error) return <p>{error}</p>
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (idEdit) {
      await updateData('shopping', idEdit, text)
      setIdEdit('')
      setText('')

      return
    }
    await addData(text, 'shopping')

    setText('')
  }
  const handleDelete = async (nanoid) => {
    await deleteData('shopping', nanoid)
  }
  const handleEdit = async (item) => {
    setText(item.name)
    setIdEdit(item.nanoid)
  }
  return (
    <div>
      <div>Card</div>
      {/* <image /> */}
      <h1>Title</h1>
      <p>Explain</p>
      <p>frameworks/tools use</p>
      <p>View Demo/ View Source</p>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='name'
          type='text'
          id='text'
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        {idEdit ? (
          <LoadingButton
            loading={loading.updateData}
            color='secondary'
            variant='contained'
            type='submit'>
            Edit Name
          </LoadingButton>
        ) : (
          <LoadingButton
            loading={loading.addData}
            color='primary'
            variant='contained'
            type='submit'>
            Submit Name
          </LoadingButton>
        )}
      </form>
      {data.map((item) => (
        <div key={item.nanoid}>
          <p>{item.available.toString()}</p>
          <p>{item.name}</p>
          <LoadingButton
            loading={loading[item.nanoid]}
            color='error'
            variant='outlined'
            type='submit'
            onClick={() => handleDelete(item.nanoid)}>
            Delete
          </LoadingButton>
          <LoadingButton
            loading={loading[item.nanoid]}
            color='success'
            variant='contained'
            type='submit'
            onClick={() => handleEdit(item)}>
            Edit
          </LoadingButton>
        </div>
      ))}
    </div>
  )
}
