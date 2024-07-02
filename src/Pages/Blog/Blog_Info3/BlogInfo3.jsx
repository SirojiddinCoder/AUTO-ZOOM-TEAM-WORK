import styles from "../Blog_Info3/BlogInfo3.module.css"
import img from "../../../assets/blog3.jpg"
import Footer from "../../../Components/Footer/Footer"

export const BlogInfo3 = () => {
  return (
    <>
    <div className={styles.blog_info_container}>
        <a href="/" className={styles.link_to_home}>
            Luxury Cars for Rent in Dubai /
            <span> Blog /</span>
            <span> Top 5 Reasons to Rent a Car Dubai</span>
        </a>
        <h2 className={styles.title}>TOP 5 REASONS TO RENT A CAR DUBAI STYLE THIS SUMMER</h2>
        <p className={styles.text}>Get as more as you possibly can from your holiday or business trip to Dubai by visiting a huge number of places each time in a different car ! Summer is more than just a beach and a body, and Autozoom Luxury Car Rental is more than just a regular car hire business. We're your one-stop four-wheel solution to making the most of your time in Dubai. If you are in the search of a speedy and stylish vehicle that could help you explore this beautiful city in the most comfortable way, contact our offices before this amazing summer is over! You still can make it in time to benefit from our set of summer offers that we call Trinity Summer Hot Deals, each of which lets you to pay for a car hire nearly 30-50% less than usual. Not only we have one of the widest breadths of luxury and sports cars in Dubai. Our two huge car-hire yards allow us to provide a lot of hot deals supported by the closest attention and expertise of our staff. In our face you will meet a faithful, sincere, and reliable friend ready to give you the detailed professional advice on renting wisely, beneficially, and safely.</p>
        <p className={`${styles.text} ${styles.city_name}`}>Burj Halifa</p>
        <img src={img} alt="car_photo" className={styles.img}/>
        <p className={styles.text}>Late summer and early autumn is our usual time of best deals and promotions. We’ve prepared a nice surprise for everyone who is crazy about adventure and driving! These days you can get one of the best car hiring offers in the city, which will allow you to drive the coolest cars in the world, such as Rolls Royce, Lamborghini, or Ferrari at knockdown prices! But let’s begin from the beginning, and consider the most feasible reasons why you need to hire a car while on holiday, study, or a working visit in Dubai.</p>
    </div>
    <Footer/>
</>
  )
}
