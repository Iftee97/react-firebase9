import { useState, useEffect, useRef } from 'react'

// firebase imports
import { db } from '../firebase/config'
import { collection, onSnapshot, query, where } from 'firebase/firestore'

export const useCollection = (c, _q) => {
  const [documents, setDocuments] = useState(null)

  // set up query
  const q = useRef(_q).current

  useEffect(() => {
    let ref = collection(db, c)
    if (q) {
      ref = query(ref, where(...q))
    }
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

    // clean-up
    return () => {
      unsubscribe()
    }
  }, [c, q])

  return {
    documents
  }
}

// this custom component is used to fetch real-time data from firestore database
