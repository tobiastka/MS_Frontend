import { useEffect, useState } from 'react'
import CardManga from '../components/CardManga'
import useMangas from '../hooks/useMangas'
import '../stylesheets/Shop.css'
const Shop = () => {
  const { mangas, mangasActive } = useMangas()

  const [sort, setSort] = useState('')

  const handlerSelect = (e) => {
    setSort(e.target.value)
  }

  const sortMangas = (mangas) => {
    return []
  }

  const sortedMangas = sort ? sortMangas(mangas) : mangas
  return (
    <div className='ms-shop-body'>
      <div className='ms-shop-filter'>
        filter
      </div>
      <div className='ms-shop-products-container'>
        <div className='ms-shop-products-sort'>
          <label className='ms-sort-label'>Ordena los productos: </label>
          <select name='sort' onChange={handlerSelect}>
            <option value=''>No ordenar</option>
            <option value='bestSelling'>Más vendidos</option>
            <option value='AlphaA-Z'>Alfabéticamente A-Z</option>
            <option value='AlphaZ-A'>Alfabéticamente Z-A</option>
            <option value='PriceL-H'>Menor precio</option>
            <option value='PriceH-L'>Mayor precio</option>

          </select>
        </div>
        <div className='ms-shop-products'>
          {
            mangasActive
              ? sortedMangas.map(manga => <CardManga
                  key={manga.id}
                  image={manga.imagenTomo}
                  name={manga.nombre}
                  price={manga.precio}
                  volume={manga.volumen}
                                          />)
              : ''
        }
        </div>
      </div>

    </div>
  )
}

export default Shop
