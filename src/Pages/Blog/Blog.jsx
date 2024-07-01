import styles from "../Blog/Blog.module.css"
import img1 from "../../assets/blog1.jpg"
import img2 from "../../assets/blog2.jpg"
import img3 from "../../assets/blog3.jpg"
import { Link } from "react-router-dom"
import { IoMdArrowDroprightCircle } from "react-icons/io";
import Footer from "../../Components/Footer/Footer"

const Blog = () => {
  return (
    <>
    <div className={styles.big_container}>
    <div className={styles.blog_container}>
    <a href="/" className={styles.link_to_home}>
        Luxury Cars for Rent in Dubai /
        <span> Blog</span>
      </a>
      <h2 className={styles.title}>Blog</h2>
      <div className={styles.boxes}>
        <div className={styles.box}>
          <div className={styles.left}>
            <img src={img1} alt="car" className={styles.img}/>
          </div>
          <div className={styles.right}>
            <h2 className={styles.title_right}>Top 3 Destinations to Visit in Dubai in a Rental Car</h2>
            <p className={styles.text_right}>One of the main reasons to hire a car in Dubai is the quality of the UAE roads. According to the World Economic Forum, the Emirates belong to the top seven countries with the most exemplary road infrastructure.</p>
            <div className={styles.display}>
            <p className={styles.date}>25 Seb 2022</p>
            <Link to="/blog_info1"><IoMdArrowDroprightCircle className={styles.icon}/></Link>
          </div>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.left}>
            <img src={img2} alt="car" className={styles.img}/>
          </div>
         <div className={styles.right}>
            <h2 className={styles.title_right}>Top 5 wonderful spots for a car photo session in Dubai</h2>
            <p className={styles.text_right}>There are so many wonderful things to do in Dubai, but when you rent a car your opportunities are nearly doubled. The number of places you will die to go to and make memorable pictures is such that it makes you impossible to resist to hire a mode of transportation, if not for a day or two, then at least for a couple of hours. And, while doing so, who could prove against the weakness of taking a photo of themselves inside or near the car they’ve rented?</p>
            <div className={styles.display}>
            <p className={styles.date}>11 Feb 2022</p>
            <Link to="/blog_info2"><IoMdArrowDroprightCircle className={styles.icon}/></Link>
          </div>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.left}>
            <img src={img3} alt="car" className={styles.img}/>
          </div>
         <div className={styles.right}>
            <h2 className={styles.title_right}>Top 5 Reasons to Rent a Car Dubai Style this Summer</h2>
            <p className={styles.text_right}>Summer is more than just a beach and a body, and Autozoom Luxury Car Rental is more than just a regular car hire business. We're your one-stop four-wheel solution to making the most of your time in Dubai.</p>
            <div className={styles.display}>
            <p className={styles.date}>31 Jul 2022</p>
            <Link to="/blog_info3"><IoMdArrowDroprightCircle className={styles.icon}/></Link>
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Blog