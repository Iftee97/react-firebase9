import { useState, useEffect } from 'react'

// firebase imports
import { db } from '../firebase/config'
import { collection, onSnapshot } from 'firebase/firestore'

export const useCollection = (c) => {
  const [documents, setDocuments] = useState(null)

  useEffect(() => {
    let ref = collection(db, c)
    const unsubscribe = onSnapshot(ref, (snapshot) => {
      let results = []
      snapshot.docs.forEach(doc => {
        results.push({
          id: doc.id,
          ...doc.data()
        })
      })
      setDocuments(results)
    })

    // clean up function
    return () => {
      unsubscribe()
    }
  }, [c])

  return { documents }
}

// this custom component is used to fetch real-time data from firestore database
