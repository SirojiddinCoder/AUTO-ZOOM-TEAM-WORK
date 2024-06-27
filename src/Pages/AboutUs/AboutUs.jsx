import React, { useState, useEffect } from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import './About.css'; // Ensure your CSS file path is correct
import gifImage from '../../assets/videos.mp4'; // Ensure the path to your GIF file is correct
import { json } from 'react-router-dom';

const AboutUs = () => {
  const [gifImage, setgifImage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setgifImage(true);
    }, 2000); // Delay of 2000 milliseconds (2 seconds)
  }, []);

  const api_url=fetch('https://autoapi.dezinfeksiyatashkent.uz/api/')
  
  .then((data) => {
    console.log(data);
  });

  return (
    <>
    
      <div className="AboutUs">
        <div className="container">
          <small>
            Аренда люксовых и спортивных авто / О нас
          </small>
          <ol>
            <li>
              <h1>О НАС</h1>
              <h3>
                Добро пожаловать в Auto Zoom Car Rental Co LLC – Ваш партнер в незабываемых путешествиях по Дубаю!
              </h3>
              <p>В мире, где каждая поездка становится приключением, Auto Zoom Car Rental Co LLC предлагает вам уникальный опыт аренды автомобилей в самом сердце Дубая.</p>
            </li>
            <li>
              <h3>Почему Auto Zoom?</h3>
              <p><span style={{ fontSize: "17px", fontWeight: "bold" }}>
                Элегантный Парк Автомобилей:</span> Мы предлагаем вам возможность выбора из нашего роскошного парка автомобилей – от элегантных седанов до мощных внедорожников. У нас есть автомобиль, соответствующий вашему стилю и вашим потребностям.
              </p>
              <p><span style={{ fontSize: "17px", fontWeight: "bold" }}>
                Беззаботная Аренда: </span> Наша цель – сделать вашу поездку максимально удобной. Гибкие условия аренды, возможность заказа с водителем и широкий спектр дополнительных услуг – все это для вашего комфорта.
              </p>
              <p> <span style={{ fontSize: "17px", fontWeight: "bold" }}>Прозрачность и Доверие: </span> Мы ценим каждого клиента, поэтому наши цены честны и прозрачны. Без скрытых платежей, без неожиданных сюрпризов. Доверьтесь нам, и мы сделаем ваш опыт аренды простым и ясным.</p>
              <p> <span style={{ fontSize: "17px", fontWeight: "bold" }}>
                Сервис на Вашем Уровне: </span> Наша дружелюбная и профессиональная команда готова воплотить ваши идеи в реальность. Мы стремимся не просто предоставить автомобиль, а создать для вас настоящий автомобильный опыт.
              </p>
            </li>
            <li>
              <h3>Наша Миссия:</h3>
              <p>Auto Zoom Car Rental Co LLC создана с одной целью – сделать каждую поездку незабываемой. Мы стремимся предоставить вам не просто автомобиль, а ключ к новым впечатлениям и приключениям.</p>
              <h3>
                Обратитесь к Нам:
              </h3>
              <p>Доверьтесь профессионалам – доверьтесь Auto Zoom Car Rental Co LLC. Свяжитесь с нами сегодня, чтобы начать ваше увлекательное путешествие по Дубаю наших стильных и надежных автомобилях. Позвольте себе наслаждаться каждым моментом вашего путешествия.</p>
            </li>
          </ol>
        </div>
      </div>
     
      <Footer />
    </>
  )
}

export default AboutUs;
