import '../stylesheets/Carousel.css'
import LeftArrow from '../icons/LeftArrow'
import RightArrow from '../icons/RightArrow'

import { useRef } from 'react'

const Carousel = ({ title, width, height, imgs }) => {
  const ARROW_SIZE = 30
  const refImagesDiv = useRef()

  const nextImg = () => {
    if (!refImagesDiv.current.children.length) return
    const fImg = refImagesDiv.current.children[0]
    refImagesDiv.current.style.transition = '1000ms'
    const imgWidth = refImagesDiv.current.children[0].offsetWidth
    refImagesDiv.current.style.transform = `translateX(-${imgWidth}px)`

    const replace = () => {
      refImagesDiv.current.style.transition = 'none'
      refImagesDiv.current.style.transform = 'translateX(0)'
      refImagesDiv.current.appendChild(fImg)
      refImagesDiv.current.removeEventListener('transitionend', replace)
    }

    refImagesDiv.current.addEventListener('transitionend', replace)
  }

  const prevImg = () => {
    if (!refImagesDiv.current.children.length) return
    const lImg = refImagesDiv.current.children[refImagesDiv.current.children.length - 1]
    const fImg = refImagesDiv.current.children[0]
    console.log(lImg, fImg)
    refImagesDiv.current.insertBefore(lImg, fImg)
    refImagesDiv.current.style.transition = 'none'
    const imgWidth = refImagesDiv.current.children[0].offsetWidth
    refImagesDiv.current.style.transform = `translateX(-${imgWidth}px)`
    setTimeout(() => {
      refImagesDiv.current.style.transition = '1000ms'
      refImagesDiv.current.style.transform = 'translateX(0)'
    }, 10)
  }

  return (
    <div style={{ width, maxWidth: width, height }} className='ms-carousel-body'>
      <div className='ms-carousel-images' ref={refImagesDiv}>
        {
                    imgs.map(img => <img className='ms-carousel-images-img' src={img} alt='' />)
                }

      </div>
      <div className='ms-carousel-title'>
        <p className='ms-carousel-title-text'>{title}</p>
      </div>
      <div className='ms-carousel-controls'>
        <LeftArrow onClick={prevImg} fill='#FFE6C7' className='ms-carousel-button carousel-button-left' h={ARROW_SIZE} w={ARROW_SIZE} />
        <RightArrow onClick={nextImg} fill='#FFE6C7' className='ms-carousel-button carousel-button-right' h={ARROW_SIZE} w={ARROW_SIZE} />
      </div>
    </div>
  )
}

export default Carousel
