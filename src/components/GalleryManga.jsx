import { useState } from 'react'
import '../stylesheets/GalleryManga.css'
import CardManga from './CardManga'
import RightArrow from '../icons/RightArrow'
import LeftArrow from '../icons/LeftArrow'
import useMangas from '../hooks/useMangas'
import useSerie from '../hooks/useSeries'

const GalleryManga = ({ mangaName }) => {
  const { mangas, mangasActive } = useMangas(mangaName)
  const { serie, serieActive } = useSerie(mangaName)
  console.log(serie)
  const [page, setPage] = useState(0)
  const MANGAS_PER_PAGE = 4

  const stillMoreMangas = (page) => {
    return (page + 1) * MANGAS_PER_PAGE < mangas.length
  }

  const stillLessMangas = (page) => {
    return (page - 1) >= 0
  }
  const nextPageHandler = () => {
    if (stillMoreMangas(page))setPage(page => ++page)
  }

  const prevPageHandler = () => {
    if (stillLessMangas(page)) setPage(page => --page)
  }

  const mangasInView = mangas.slice(page * MANGAS_PER_PAGE, page * MANGAS_PER_PAGE + MANGAS_PER_PAGE)

  return (
    <div className='ms-gallery-body'>
      <div className='ms-gallery-info'>
        <h3 className='ms-gallery-info-title'>
          {serie.nombre}
        </h3>
        <p className='ms-gallery-info-description'>{serieActive ? serie.resumenHistoria : ''}</p>
        <div className='ms-gallery-info-img-container'>
          <img className='ms-gallery-info-img' src={serieActive ? serie.imagenBanner : ''} alt='' />
        </div>
      </div>
      <div className='ms-gallery-mangas'>
        {
            mangasActive
              ? mangasInView.map(manga => <CardManga
                  key={manga.id}
                  image={manga.imagenTomo}
                  name={manga.nombre}
                  price={1800}
                  volume={manga.volumen}
                                          />
              )
              : ''
        }
        <LeftArrow
          width='2rem'
          height='2rem'
          onClick={prevPageHandler}
          className={`ms-gallery-page-arrow-button arrow-left ${stillLessMangas(page) ? '' : 'hiden'}`}
        />
        <RightArrow
          width='2rem'
          height='2rem'
          onClick={nextPageHandler}
          className={`ms-gallery-page-arrow-button arrow-rigth ${stillMoreMangas(page) ? '' : 'hiden'}`}
        />
      </div>

    </div>
  )
}

export default GalleryManga
