import Carousel from '../components/Carousel'
import '../stylesheets/Home.css'
import img1 from '../images/carousel/img1.png'
import jujutsuCarouselImg from '../images/carousel/jujutsu.png'
import jujutsuCarouselImg2 from '../images/carousel/jujutsu2.png'

import GalleryManga from '../components/GalleryManga'

const Home = () => {
  const TEST_IMG = [jujutsuCarouselImg2, jujutsuCarouselImg, img1]

  return (
    <div className='ms-home-body'>
      <section className='ms-home-section-small'>
        <Carousel imgs={TEST_IMG} width='50rem' height='200px' title='Mangas mas vendidos!' />
        <Carousel imgs={TEST_IMG} width='50rem' height='200px' title='Enterate de las ultimas novedades!' />
      </section>
      <section style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        <GalleryManga mangaName='Tokyo Ghoul' />
        <GalleryManga mangaName='Ao' />
        <GalleryManga mangaName='Tokyo Ghoul' />
        <GalleryManga mangaName='Ao' />
      </section>

    </div>
  )
}

export default Home
