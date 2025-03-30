import styles from "./Reviews.module.css";

const ReviewCard = ({ review, isFlipping }) => {
  return (
    <div className={`${styles.review_card} ${isFlipping ? styles.flipping : ""}`}>
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
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52tbpQ8Q8MX5ZkTaHbzV2h2-NInPjmfxTpw&s"
          alt="like" className={styles.action_icon}
        />
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/014/455/886/small/share-icon-on-transparent-background-free-png.png"
          alt="share" className={styles.action_icon}
        />
      </div>
    </div>
  );
};

export default ReviewCard;