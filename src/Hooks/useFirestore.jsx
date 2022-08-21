import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from 'src/firebase/config'

// This hook to be able to reuse the same data in different components. This hook is going to return an Object
export const useFirestore = () => {
  // these 3 are the 3 main basic to use get we have to a server
  const [data, setData] = useState([])
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)

  // Adding useEffect I'm making sure im calling this function just one time
  useEffect(() => {
    getData()
  }, [])
  // Collection of users data
  const getData = async (collectionName = 'users') => {
    setLoading(true)

    // Fetching Data with FireStore
    try {
      /** IF I WANT TO DO FILTER IN MY COLLECTION TO SHOW TO THE USER
       * const dataRef = collection(db,collectionName)
       * const q = query(dataRef, where("NAME_OF_DATA", "CONDITION(== OR !=)", "DATA_RESULT"))
       * const querySnapshot = await getDocs(q)
       */
      const querySnapshot = await getDocs(collection(db, collectionName))
      //  This map need to find documentation
      const dataDB = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      setData(dataDB)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }

  return {
    data,
    error,
    loading
  }
}
