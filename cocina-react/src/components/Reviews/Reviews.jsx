import React,{useState,useEffect} from 'react'
import styles from './Reviews.module.css'
import { reviews } from "../../assets/Data/reviews";
import ReviewCard from './ReviewCard';
import PaginationControls from '../PaginationControls/PaginationControls';
import usePagination from '../../hooks/usePagination';
import usePaginationFlip from '../../Hooks/UsePaginationFlip';

const Reviews = () => {  
    const { itemsPerPage, isFlipping, handlePageChangeWithAnimation } = usePaginationFlip(4, 1);

    const {
        currentItems: currentReviews,
        currentPage,
        totalPages,
        nextPage,
        prevPage
      } = usePagination(reviews, itemsPerPage);

    const handlePageChange = (direction) => {
        handlePageChangeWithAnimation(
            direction, 
            currentPage, 
            totalPages, 
            direction === 'next' ? nextPage : prevPage
        );
    };

  return (
    <div className={styles.reviews} id="reviews">
        <span className={styles.section_title}>Fresh from our community</span>
        <div className={styles.reviews_cards_container}>
            {currentReviews.map((review) => (
                <ReviewCard 
                    key={review.id} 
                    review={review} 
                    isFlipping={isFlipping} 
                />
            ))}
        </div>

        <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            onNext={() => handlePageChange('next')}
            onPrev={() => handlePageChange('prev')}
        />
    </div>
  )
}

export default Reviews