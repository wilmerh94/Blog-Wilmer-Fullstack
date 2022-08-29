import { collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, updateDoc } from 'firebase/firestore'
import { useState } from 'react'
import { auth, db } from 'src/firebase/config'
import { nanoid } from 'nanoid'

// This hook to be able to reuse the same data in different components. This hook is going to return an Object
export const useFirestore = () => {
  // these 3 are the 3 main basic to use get we have to a server
  const [data, setData] = useState([])
  const [error, setError] = useState()
  const [loading, setLoading] = useState({})

  // Adding useEffect I'm making sure im calling this function just one time but every time when i render a page it will be calling
  // useEffect(() => {
  //   getData()
  // }, [])

  // Collection of users data
  const getData = async (collectionName) => {
    setLoading((prev) => ({ ...prev, getData: true }))

    // Fetching Data with FireStore
    try {
      /** IF I WANT TO DO FILTER IN MY COLLECTION TO SHOW TO THE USER
       * const dataRef = collection(db,collectionName)
       * const q = query(dataRef, where("NAME_OF_DATA", "CONDITION(== OR !=)", "DATA_RESULT like auth.currentUser.uid"))
       * const querySnapshot = await getDocs(q)
       */
      const dataRef = collection(db, collectionName)
      const q = query(dataRef)
      const querySnapshot = await getDocs(q)
      //  This map need to find documentation
      const dataDB = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      setData(dataDB)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading((prev) => ({ ...prev, getData: false }))
    }
  }

  // Adding data to the store with
  const addData = async (item, collectionName) => {
    try {
      setLoading((prev) => ({ ...prev, addData: true }))
      const newDoc = {
        name: item,
        available: true,
        nanoid: nanoid(6),
        uid: auth.currentUser.uid
      }
      const docRef = doc(db, collectionName, newDoc.nanoid)
      await setDoc(docRef, newDoc)
      setData([...data, newDoc])
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading((prev) => ({ ...prev, addData: false }))
    }
  }
  // Delete Data
  const deleteData = async (collectionName, nanoid) => {
    try {
      setLoading((prev) => ({ ...prev, [nanoid]: true }))
      const docRef = doc(db, collectionName, nanoid)
      await deleteDoc(docRef)
      // removing item from local
      setData(data.filter((item) => item.nanoid !== nanoid))
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading((prev) => ({ ...prev, [nanoid]: false }))
    }
  }
  // Update/Edit Data
  const updateData = async (collectionName, nanoid, text) => {
    try {
      setLoading((prev) => ({ ...prev, [nanoid]: true }))
      const docRef = doc(db, collectionName, nanoid)
      await updateDoc(docRef, { name: text })
      setData(data.map((item) => (item.nanoid === nanoid ? { ...item, name: text } : item)))
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading((prev) => ({ ...prev, [nanoid]: false }))
    }
  }

  const searchData = async (collectionName, nanoid) => {
    try {
      const docRef = doc(db, collectionName, nanoid)
      const docSnap = await getDoc(docRef)
      return docSnap
      // I can d after this docSnap.exist()
    } catch (err) {
      setError(err.message)
    }
  }

  return {
    data,
    error,
    loading,
    getData,
    addData,
    deleteData,
    updateData,
    searchData
  }
}
