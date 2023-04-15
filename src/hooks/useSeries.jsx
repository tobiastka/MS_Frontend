import { useEffect, useState } from 'react'

const useSerie = (name = '') => {
  const URL = 'http://localhost:3000/collection'
  const [serie, setSerie] = useState({})
  const [serieActive, setSerieActive] = useState(false)
  if (!name) {
    useEffect(() => {
      fetch(URL)
        .then(response => response.json())
        .then(data => {
          setSerie(data)
          setSerieActive(true)
        })
    }, [])
    return {
      serie, serieActive
    }
  } else {
    useEffect(() => {
      fetch(`${URL}?nombre=${name}`)
        .then(response => response.json())
        .then(data => {
          setSerie(data)
          setSerieActive(true)
        })
    }, [name])
    return {
      serie, serieActive
    }
  }
}

export default useSerie
