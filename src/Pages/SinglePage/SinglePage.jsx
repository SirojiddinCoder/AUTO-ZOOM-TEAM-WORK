import { useState } from 'react'
import { useParams } from 'react-router-dom'

function SinglePage() {
    const {id} = useParams()
    const carDetail = `https://autoapi.dezinfeksiyatashkent.uz/api/cars/${id}`
    const [aboutCar, getAboutCar]  = useState()
    console.log(id);
   const getDetails = fetch(carDetail).then(res=>res.json()).then((data)=>console.log(data?.car_id))
  return (
   <></>
  )
}

export default SinglePage
