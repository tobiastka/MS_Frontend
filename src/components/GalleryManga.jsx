import { useEffect, useState } from 'react'
import '../stylesheets/GalleryManga.css'
import CardManga from './CardManga'

const GalleryManga = ({ mangaName }) => {
  const [mangas, setMangas] = useState([])
  const [serie, setSerie] = useState({})
  const baseURL = 'http://localhost:3000'
  console.log(mangas)
  useEffect(() => {
    fetch(`${baseURL}/collection?nombre=${mangaName}`)
      .then(response => response.json())
      .then(data => setSerie(data))
      .catch(error => console.log(error))
    fetch(`${baseURL}/manga?nombre=${mangaName}`)
      .then(response => response.json())
      .then(data => data.map(manga => {
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
      }))
      .then(data => setMangas(data))
      .catch(error => console.log(error))
  }, [mangaName])

  return (
    <div className='ms-gallery-body'>
      <div className='ms-gallery-info'>
        <h3 className='ms-gallery-info-title'>
          {serie.nombre}
        </h3>
        <p className='ms-gallery-info-description'>{serie.resumenHistoria}</p>
        <div className='ms-gallery-info-img-container'>
          <img className='ms-gallery-info-img' src={serie.imagenBanner} alt='' />
        </div>
      </div>
      <div className='ms-gallery-mangas'>
        {
            mangas.length
              ? mangas.slice(0, 4).map(manga => <CardManga
                  key={manga.id}
                  image={manga.imagenTomo}
                  name={manga.nombre}
                  price={1800}
                  volume={manga.volumen}
                                                />)
              : ''
        }
      </div>
    </div>
  )
}

export default GalleryManga
