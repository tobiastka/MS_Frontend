import Carousel from '../components/Carousel'
import '../stylesheets/Home.css'

import GalleryManga from '../components/GalleryManga'

const Home = () => {
  return (
    <div className='ms-home-body'>
      <section className='ms-home-section-small'>
        <Carousel type='best sellers' width='50rem' height='200px' title='Mangas mas vendidos!' />
        <Carousel type='news' height='200px' title='Enterate de las ultimas novedades!' />
      </section>
      <section>
        {/* <Carousel imgs={TEST_IMG} width='100rem' height='400px' title='Noticias mas recientes' /> */}
      </section>
      <section style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        <GalleryManga mangaName='Tokyo Ghoul' />
      </section>
      <section style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        <GalleryManga mangaName='My Hero' />
      </section>
      <section style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        <GalleryManga mangaName='Ao' />
      </section>

    </div>
  )
}

export default Home
