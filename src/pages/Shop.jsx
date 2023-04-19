import { useEffect, useState } from 'react'
import CardManga from '../components/CardManga'
import useMangas from '../hooks/useMangas'
import '../stylesheets/Shop.css'
const Shop = () => {
  const { mangas, mangasActive } = useMangas()
  const [sort, setSort] = useState('')
  const filterInitialState = {
    genero: '',
    formato: ''
  }
  const [filter, setFilter] = useState(filterInitialState)

  const newFormats = mangas.reduce((acc, manga) => {
    if (!acc.includes(manga.formato)) acc.push(manga.formato)
    return acc
  }, [])

  const newGenders = mangas.reduce((acc, manga) => {
    if (!acc.includes(manga.genero)) acc.push(manga.genero)
    return acc
  }, [])

  const handlerSelect = (e) => {
    setSort(e.target.value)
  }
  const handlerFilter = (e) => {
    setFilter(oldFilter => { return { ...oldFilter, [e.target.name]: e.target.value } })
  }

  const filterMangas = (mangas, filterObject) => {
    const filterKeys = Object.keys(filterObject)
    const filteredMangas = filterKeys.reduce((acc, filterKey) => {
      if (!filterObject[filterKey]) return acc
      return acc.filter(mangas => mangas[filterKey] === filterObject[filterKey])
    }, [...mangas])
    return filteredMangas
  }
  const filteredMangas = filterMangas(mangas, filter)

  const sortMangas = (mangas) => {
    if (sort === 'AlphaZ-A') {
      return [...mangas].sort((a, b) => {
        if (a.nombre > b.nombre) return -1
        if (b.nombre > a.nombre) return 1
        return 0
      })
    }
    if (sort === 'AlphaA-Z') {
      return [...mangas].sort((a, b) => {
        if (a.nombre < b.nombre) return -1
        if (b.nombre < a.nombre) return 1
        return 0
      })
    }

    return mangas
  }
  const sortedMangas = sort ? sortMangas(filteredMangas) : filteredMangas
  return (
    <div className='ms-shop-body'>
      <div className='ms-shop-filter'>
        <div className='ms-filter-format'>
          <h3>Formatos</h3>
          <div className='ms-filter-checkbox'>
            <input type='radio' name='formato' value='' onChange={handlerFilter} defaultChecked />
            <label>Todos los formatos</label>
          </div>
          {

            newFormats.length
              ? newFormats.map(format => {
                return (
                  <div className='ms-filter-checkbox' key={format}>
                    <input type='radio' name='formato' value={format} onChange={handlerFilter} />
                    <label>{format}</label>
                  </div>
                )
              })
              : ''
          }
        </div>
        <div className='ms-filter-genero'>
          <h3>Generos</h3>
          <div className='ms-filter-checkbox'>
            <input type='radio' name='genero' value='' onChange={handlerFilter} defaultChecked />
            <label>Todos los generos</label>
          </div>
          {
            newGenders.length
              ? newGenders.map(gender => {
                return (
                  <div className='ms-filter-checkbox' key={gender}>
                    <input type='radio' value={gender} name='genero' onChange={handlerFilter} />
                    <label>{gender}</label>
                  </div>
                )
              }
              )
              : ''
          }
        </div>
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
