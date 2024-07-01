import styles from "../Services/Services.module.css"
import img1 from "../../assets/service1.jpg"
import img2 from "../../assets/service2.jpg"
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";


export const Services = () => {
  return (
    <>
    <div className={styles.big_container}>
    <div className={styles.serviceContainer}>
      <a href="/" className={styles.link_to_home}>
        Luxury Cars for Rent in Dubai /
        <span> Services</span>
      </a>
      <h2 className={styles.title}>SERVICES</h2>
      <div className={styles.boxes}>
        <div className={styles.box}>
            <img src={img1} alt="sports car" className={styles.img}/>
            <h3 className={styles.title_box}>Sports Car Rental Dubai Style Tour in Dubai</h3>
            <p className={styles.text_box}>Experience the thrill of a dune buggy tour in Dubai with us. We offer free hotel pick-up & drop-off service. Book now!</p>
            <Link to="/sport_car_rent" className={styles.link_to_otherpage}>
              Learn more
              <IoMdArrowDroprightCircle className={styles.icon}/>
            </Link>
        </div>
        <div className={styles.box}>
            <img src={img2} alt="photoshoot"  className={styles.img}/>
            <h3 className={styles.title_box}>Photoshoot with luxury car rental Dubai</h3>
            <p className={styles.text_box}>Professional car photoshoot as an <br /> additional type of service at Auto Zoom Car Rental</p>
            <Link to="/photoshoot" className={styles.link_to_otherpage}>
              Learn more
              <IoMdArrowDroprightCircle className={styles.icon}/>
            </Link>
        </div>
      </div>
    </div>
    </div>
    {/* <Footer/> */}
    </>
  )
}
