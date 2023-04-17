import '../stylesheets/CardManga.css'
const CardManga = ({ image, name, price, volume }) => {
  return (
    <div className='ms-card-body ms-card-body-franchise'>
      <div className='ms-card-img-container'>
        <img className='ms-card-img' src={image} alt='' />
      </div>
      <div className='ms-card-info'>
        <div className='ms-card-title'>{`${name}, tomo ${volume}`}</div>
        <div className='ms-card-price'>{price} $</div>
        <div className='ms-card-status'>•en stock</div>
        <div className='ms-card-button-container'><button className='ms-card-button'>Agregar al carrito</button></div>
      </div>

    </div>
  )
}

export default CardManga
