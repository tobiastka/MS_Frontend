import { useEffect, useState } from 'react'

export default (type) => {
  const [images, setImages] = useState([])
  const [active, setActive] = useState(false)
  const URL = 'http://localhost:3000/bannerImage'
  useEffect(() => {
    fetch(`${URL}?type=${type}`)
      .then(response => response.json())
      .then(data => {
        setImages(data)
        setActive(true)
      })
  }, [])
  return { images, active }
}
