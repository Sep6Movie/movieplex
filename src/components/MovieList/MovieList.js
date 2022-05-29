import React from 'react'
import db from "../../firebase"
import { useEffect, useState } from 'react'
import { collection, onSnapshot } from '@firebase/firestore'

function MovieList() {
    const [favorites, setFavorites] = useState([]);

    useEffect(
        () => 
        onSnapshot(collection(db, "movielist"), (snapshot) => 
        setFavorites(snapshot.docs.map(doc => doc.data()))
        ),
        []
    );

  return (
    <div>
        {favorites.map((favorite) =>
        <p>{favorite.movieID}</p>)}
    </div>
  )
}

export default MovieList