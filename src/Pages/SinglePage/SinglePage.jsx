import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import "../SinglePage/singlePage.css"
import { Carousel } from "react-responsive-carousel";
import {carsData, formInputs} from "./mock/carsData";

function SinglePage() {
  const { id } = useParams();
  const [aboutCar, getAboutCar] = useState({});
 const staticData = [
   {
     car: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwNwKFzz7l9k0jU5kDEJ_PTrbFm3rjwYmLn8MJ3G3tn9uxDKwx3ZLe6MbGguraPOiPzOU&usqp=CAU",
   },
   {
     car: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_hWWmNW5NLda6LrQJYK9THsvKDOnLUEb5HZkQXNVTd-R7lfLp_DS14Vr8uRGStflVwGg&usqp=CAU",
   },
   {
     car: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnWnzI4xDsR3eh1AMr3VE_ZEqm6fkRuo_9lvha-7B68E4iddR3OIHat2RHezRolPxmq90&usqp=CAU",
   },
 ];
  useEffect(() => {
    fetch(`https://autoapi.dezinfeksiyatashkent.uz/api/cars/${id}`)
      .then((res) => res.json())
      .then((cars) => {
        getAboutCar(cars.data), console.log(cars.data);
      });
  }, [id]);
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="details-container">
          <div className="carsDetail">
            <h1 className="details-title">
              {aboutCar?.brand?.title} {aboutCar?.model?.name} (
              {aboutCar?.color})
            </h1>
            <div className="image-withDeteils">
              <div className="car-imageSlider">
                <Carousel>
                  {staticData.map((image, idx) => (
                    <div key={idx}>
                      <img src={image?.car} alt="" className="car-slider" />
                    </div>
                  ))}
                </Carousel>
              </div>
              <div className="carsModel">
                <div className="carsCost"></div>
                <div className="carsInfo">
                  <div className="infoWrapper">
                    <img src={``} alt="" />
                    <p className="info">{aboutCar?.year}</p>
                  </div>
                  <div className="infoWrapper">
                    <img src={``} alt="" />
                    <p className="info">{aboutCar?.seconds}</p>
                  </div>
                  <div className="infoWrapper">
                    <img src={``} alt="" />
                    <p className="info">{aboutCar?.max_speed}</p>
                  </div>
                  <div className="infoWrapper">
                    <img src={``} alt="" />
                    <p className="info">{aboutCar?.max_people}</p>
                  </div>
                  <div className="infoWrapper">
                    <img src={``} alt="" />
                    <p className="info">{aboutCar?.color}</p>
                  </div>
                  <div className="infoWrapper">
                    <img src={``} alt="" />
                    <p className="info">{aboutCar?.motor}</p>
                  </div>
                  <div className="infoWrapper">
                    <img src={``} alt="" />
                    <p className="info">{aboutCar?.petrol}</p>
                  </div>
                  <div className="infoWrapper">
                    <img src={``} alt="" />
                    <p className="info">{aboutCar?.motor}</p>
                  </div>
                </div>
                <hr />
                <div className="carsSocial">
                  {carsData.map((icon, idx) => {
                    const IconComponent = icon.component;
                    return (
                      <button
                        key={idx}
                        className="socialBtn"
                        style={{ background: `${icon.style}` }}
                      >
                        <a href="#">
                          <IconComponent className="socialIcon" />
                        </a>
                      </button>
                    );
                  })}
                </div>
                <div className="toHire">
                  <form action="">
                    <div className="inputs">
                      {formInputs.map((item, idx)=>(
                        <input  key={idx} type={`${item?.type}`} placeholder={`${item?.placeholder}`} className="inputName" required />
                      ))}
                    <button type="submit" className="sendBtn">Send</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SinglePage;
