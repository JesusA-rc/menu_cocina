import React,{useState,useEffect} from 'react'
import styles from './Reviews.module.css'
import { reviews } from "../../assets/Data/reviews";

const Reviews = () => {
    const [currentPage, setCurrentPage] = useState(1); 
    const [reviewsPerPage, setReviewsPerPage] = useState(4);
    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);
    const [isFlipping, setIsFlipping] = useState(false);
    const handlePageChange = (direction) => {
        setIsFlipping(true); 
        setTimeout(() => {
        if (direction === "next" && currentPage < Math.ceil(reviews.length / reviewsPerPage)) {
            setCurrentPage(currentPage + 1);
        } else if (direction === "prev" && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
        setIsFlipping(false); 
        }, 300); 
    };

    useEffect(() => {
        const handleResize = () => {
        if (window.matchMedia("(max-width: 768px)").matches) {
            setReviewsPerPage(1);
        } else {
            setReviewsPerPage(4);
        }
        };
    
        handleResize();
        window.addEventListener("resize", handleResize);
    
        return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <div className={styles.reviews} id="reviews">
        <span className={styles.section_title}>Fresh from our community</span>
        <div className={styles.reviews_cards_container}>
        {currentReviews.map((review) => (
            <div key={review.id} className={`${styles.review_card} ${isFlipping ? styles.flipping : ""}`}>
                <div className={styles.review_header}>
                <img src={review.src_user} alt="client" className={styles.client_image}/>
                <div className={styles.content}>
                    <span className={styles.food_name}>{review.food_name}</span>
                    <span className={styles.client_name}>{review.user_name}</span>
                </div>
                </div>

                <div className={styles.rating_container}>
                <img src={review.src_rating} alt="rating" className={styles.rating_icon}/>
                <span className={styles.rating_text}>{review.review_Text}</span>
                </div>

                <div className={styles.image_container}>
                <img src={review.food_img} alt="food" className={styles.food_image}/>
                </div>

                <div className={styles.actions}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52tbpQ8Q8MX5ZkTaHbzV2h2-NInPjmfxTpw&s"
                    alt="like" className={styles.action_icon}
                />
                <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/014/455/886/small/share-icon-on-transparent-background-free-png.png"
                    alt="share" className={styles.action_icon}
                />
                </div>
            </div>
            ))}
        </div>

        <div className={styles.pagination_controls}>
          <button className={styles.pagination_button} onClick={() => handlePageChange("prev")} disabled={currentPage === 1}>
            Anterior
          </button>
          <span className={styles.pagination_progress}>
            {currentPage}/{Math.ceil(reviews.length / reviewsPerPage)}
          </span>
          <button className={styles.pagination_button} onClick={() => handlePageChange("next")} disabled={currentPage === Math.ceil(reviews.length / reviewsPerPage)}>
            Siguiente
          </button>
      </div>
    </div>
  )
}

export default Reviews