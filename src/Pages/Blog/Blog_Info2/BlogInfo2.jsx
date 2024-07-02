import styles from "../Blog_Info2/BlogInfo2.module.css"
import img from "../../../assets/blog2.jpg"
import Footer from "../../../Components/Footer/Footer"

export const BlogInfo2 = () => {
  return (
    <>
    <div className={styles.big_container}>
    <div className={styles.blog_info_container}>
        <a href="/" className={styles.link_to_home}>
            Luxury Cars for Rent in Dubai /
            <span> Blog /</span>
            <span> Top 5 Reasons to Rent a Car Dubai</span>
        </a>
        <h2 className={styles.title}>Top 5 wonderful spots for a car photo session in Dubai</h2>
        <p className={styles.text}>There are so many wonderful things to do in Dubai, but when you rent a car your opportunities are nearly doubled. The number of places you will die to go to and make memorable pictures is such that it makes you impossible to resist to hire a mode of transportation, if not for a day or two, then at least for a couple of hours. And, while doing so, who could prove against the weakness of taking a photo of themselves inside or near the car they’ve rented? But how to take the impressive-looking photos against a car and a Dubai background that will leave you with fond memories and knock out your friends? It often happens, sadly, that when you see a great spot for a picture, you face some obstacles such as heavy traffic, inability to stop, or getting rid of the crowds – just to name but a few. Nevertheless, it can still be possibl Let us share with you a few secrets that can help you to take really interesting and unforgettable amateur photos. First of all, Dubai is a bit more than only strictly underground parking and, if you know the city as well as we do, you can find plenty of great locations where you can stop without being fined or asked to move on. So, let’s find out more about just a few of these places that have been repeatedly checked out for their feasibility and impact.</p>
        <p className={`${styles.text} ${styles.city_name}`}>Palm Jumeriah</p>
        <img src={img} alt="car_photo" className={styles.img}/>
        <p className={styles.text}>The Palm Jumeirah is a hand-made archipelago built with the use of land reclamation. Designed to look like a branchy palm tree, it is a well-recognized example of modern urban planning and architectural excellence. No wonder that Palm Jumeirah attracts tons of people who are eager to capture its fashionable background. The place becomes especially desirable if you have, if only on a temporary basis, a car that you’ve always dreamed of. Palm Jumeirah is a truly number one location that offers plenty of stunning views that cannot be covered in this short article. Just come, and you will see for yourself that the place gives thousands of great opportunities to capture the car and yourself against the background of striking architecture mixed with blue and green areas. Shooting here will fill your pictures with a unique atmosphere of sea space skillfully blended with amazing structures.</p>
    </div>
    </div>
    <Footer/>
</>
  )
}
