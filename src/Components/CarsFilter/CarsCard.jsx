import React from 'react'
import { base_url } from '../../getData/getData'
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import "./CarsFilter.css"
const CarsCard = ({item}) => {
  return (
    <div className='cars__card'>
      <img src={`${base_url}/uploads/images/${item?.car_images[0].image?.src}`} alt={item?.brand?.title} />
      <h2 className='cars__card-title'>{item?.brand?.title} {item?.model?.name}</h2>
      <p className='cars__card-price'>AED{item?.price_in_aed}<span>/ $ {item?.price_in_usd}</span></p>
      <span>per day</span>
      <div className='cars__card-links'>
        <a href="#" className='whatsapp'><FaWhatsapp/> <span>WhatsApp</span></a>
        <a href="#" className='telegram'><FaTelegram/><span>Telegram</span></a>
      </div>
    </div>
  )
}

export default CarsCard
