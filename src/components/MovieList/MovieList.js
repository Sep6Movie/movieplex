import React from 'react'
import db from "../../firebase"
import { useEffect } from 'react'
import { collection, onSnapshot } from '@firebase/firestore'

function MovieList() {
    useEffect(() => {
        onSnapshot(collection(db, "movielist"), (snapshot) => {
            console.log(snapshot.docs.map(doc => doc.data()));
        });
    })
  return (
    <div>MovieList</div>
  )
}

export default MovieList