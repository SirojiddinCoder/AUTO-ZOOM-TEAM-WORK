import styles from "../sport_car_rent/sportCarRent.module.css"
import img from "../../../assets/SportsCarRental.jpg"
import { TiInputCheckedOutline } from "react-icons/ti";
import Footer from "../../../Components/Footer/Footer";


export const SportCarRent = () => {
    return (
        <>
        <div className={styles.SportCarRentContainer}>
            <a href="/" className={styles.link_to_home}>
                Luxury Cars for Rent in Dubai /
                <span> Services / </span>
                <span>Sports Car Rental Dubai Style Tour in Dubai</span>
            </a>
            <h2 className={styles.title}>Sports Car Rental Dubai Style Tour in Dubai</h2>
            <div className={styles.boxes}>
                <div className={styles.box}>
                    <img src={img} alt="sports car" className={styles.img}/>
                    <div className={styles.text_box}>
                        <h3 className={styles.title_text_box}>basic</h3>
                        <div className={styles.sport_car_price}>
                            <span className={styles.span_box}>1000</span>
                            <span>one person</span>
                        </div>
                        <p className={styles.sport_car_text}>Dune buggies in Dubai Book your ride on the most exciting adventure activity to hit the desert and later pamper your self  to a traditional Arabian <br />hospitality.</p>
                        <h3 className={styles.package_inclusions}>Package Inclusions:</h3>
                        <ul>
                            <li><TiInputCheckedOutline className={styles.icon_check}/>Dune Buggy riding 1.5 hours</li>
                            <li><TiInputCheckedOutline className={styles.icon_check}/>Cuadro 15 min</li>
                            <li><TiInputCheckedOutline className={styles.icon_check}/>Premium Transfer to camp</li>
                            <li><TiInputCheckedOutline className={styles.icon_check}/>Falcone shoting</li>
                            <li><TiInputCheckedOutline className={styles.icon_check}/>Camel</li>
                            <li><TiInputCheckedOutline className={styles.icon_check}/>VIP room</li>
                            <li><TiInputCheckedOutline className={styles.icon_check}/>Fruits, Drinks, BBQ</li>
                        </ul>
                        <button className={styles.btn_booking}>book now</button>
                    </div>
                </div>
                <div className={styles.box}>
                    <img src={img} alt="sports car" className={styles.img}/>
                    <div className={styles.text_box}>
                        <h3 className={styles.title_text_box}>basic</h3>
                        <div className={styles.sport_car_price}>
                            <span className={styles.span_box}>2000</span>
                            <span>two person</span>
                        </div>
                        <p className={styles.sport_car_text}>1asasa2334343434Dune buggies in Dubai Book your ride on the most exciting adventure activity to hit the desert and later pamper your self to a traditional Arabian hospitality.</p>
                        <h3 className={styles.package_inclusions}>Package Inclusions:</h3>
                        <ul>
                            <li><TiInputCheckedOutline className={styles.icon_check}/>Premium Transfer to camp</li>
                            <li><TiInputCheckedOutline className={styles.icon_check}/>Dune Buggy riding 1.5 hours</li>
                            <li><TiInputCheckedOutline className={styles.icon_check}/>Cuadro 15 min</li>
                            <li><TiInputCheckedOutline className={styles.icon_check}/>Falcone shoting</li>
                            <li><TiInputCheckedOutline className={styles.icon_check}/>Camel</li>
                            <li><TiInputCheckedOutline className={styles.icon_check}/>VIP room</li>
                            <li><TiInputCheckedOutline className={styles.icon_check}/>Fruits, Drinks, BBQ</li>
                        </ul>
                        <button className={styles.btn_booking}>book now</button>
                    </div>
                </div>
                <div className={styles.box}>
                    <img src={img} alt="sports car" className={styles.img}/>
                    <div className={styles.text_box}>
                        <h3 className={styles.title_text_box}>basic</h3>
                        <div className={styles.sport_car_price}>
                            <span className={styles.span_box}>3000</span>
                            <span>two person</span>
                        </div>
                        <p className={styles.sport_car_text}>121212334343434Dune buggies in Dubai Book your ride on the most exciting adventure activity to hit the desert and later pamper your self to a traditional Arabian hospitality.</p>
                        <h3 className={styles.package_inclusions}>Package Inclusions:</h3>
                        <ul>
                            <li><TiInputCheckedOutline className={styles.icon_check}/>Premium Transfer to camp</li>
                            <li><TiInputCheckedOutline className={styles.icon_check}/>Dune Buggy riding 1.5 hours</li>
                            <li><TiInputCheckedOutline className={styles.icon_check}/>Cuadro 15 min</li>
                            <li><TiInputCheckedOutline className={styles.icon_check}/>Falcone shoting</li>
                            <li><TiInputCheckedOutline className={styles.icon_check}/>Camel</li>
                            <li><TiInputCheckedOutline className={styles.icon_check}/>VIP room</li>
                            <li><TiInputCheckedOutline className={styles.icon_check}/>Fruits, Drinks, BBQ</li>
                        </ul>
                        <button className={styles.btn_booking}>book now</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
