import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { blogData } from 'src/redux/userDuck'

export const useFetch = (url) => {
  const dispatch = useDispatch()

  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const getData = async () => {
      try {
        const response = await axios.get(url)
        console.log(response.data)
        setResponse(response.data)
        dispatch(blogData(response.data))
      } catch (error) {
        setError(error)
        setResponse(null)
      }
    }
    getData()
  }, [])

  return { response, error }
}
