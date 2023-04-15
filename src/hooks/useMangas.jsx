import { useEffect, useState } from 'react'

const useMangas = (name = '') => {
  const URL = 'http://localhost:3000/manga'
  const [mangas, setMangas] = useState([])
  const [mangasActive, setMangasActive] = useState(false)
  if (!name) {
    useEffect(
      () => {
        fetch(URL)
          .then(response => response.json())
          .then(data => {
            setMangas(formatMangas(data))
            setMangasActive(true)
          }
          )
          .catch(error => console.error(error))
      },
      []
    )
    return { mangas, mangasActive }
  } else {
    useEffect(
      () => {
        fetch(`${URL}?nombre=${name}`)
          .then(response => response.json())
          .then(data => {
            setMangas(formatMangas(data))
            setMangasActive(true)
          }
          )
          .catch(error => console.error(error))
      },
      [name]
    )
    return { mangas, mangasActive }
  }
}

const formatMangas = (mangas) => {
  const formatedMangas = mangas.map(manga => {
    return {
      id: manga.id,
      nombre: manga.collection.nombre,
      autor: manga.collection.autor,
      cantidadVolumenes: manga.collection.cantidadVolumenes,
      formato: manga.collection.formato,
      imagenBanner: manga.collection.imagenBanner,
      resumenHistoria: manga.collection.resumenHistoria,
      imagenTomo: manga.imagen,
      volumen: manga.volumen
    }
  })
  return formatedMangas
}

export default useMangas
